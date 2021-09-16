import * as React from "react";
import { StyleSheet } from "react-native";

import EditScreenInfo from "../../../components/EditScreenInfo";
import { Text, View } from "../../../components/Themed";
import { RootTabScreenProps } from "../../../types";

export default function SignUp({ navigation }: RootTabScreenProps<"TabOne">) {
  // createUserWithEmailAndPassword(getAuth(), 'PIDAR@dsad.com', 'LOHSUkablyad').then((userCredential) => {
  //   // Signed in
  //   var user = userCredential.user;
  //   // ...
  // })
  // .catch((error) => {
  //   var errorCode = error.code;
  //   var errorMessage = error.message;
  // });
  return <View style={styles.container}>SignUp</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
