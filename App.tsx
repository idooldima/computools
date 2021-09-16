import React, { useEffect, useState } from "react";
import { Provider, useSelector } from "react-redux";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { firebaseConfig } from "./firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "./store/auth/actions";
import store from "./store/store";
import { currentUserSelector } from "./store/auth/selectors";

initializeApp(firebaseConfig);

function RenderApp() {
  const dispatch = useDispatch();
  const currentUser = useSelector(currentUserSelector);
  const [isFirebaseLoaded, setIsFirebaseLoaded] = useState(false);
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  useEffect(() => {
    onAuthStateChanged(getAuth(), (user) => {
      setIsFirebaseLoaded(true);
      if (user && !currentUser) {
        // dispatch(signInSuccess(user));
        getAuth().signOut();
      }
    });
  }, []);

  if (!isLoadingComplete || !isFirebaseLoaded) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

export default function App() {
  return (
    <Provider store={store}>
      <RenderApp />
    </Provider>
  );
}
