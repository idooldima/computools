import * as React from "react";
import { Button, Input } from "react-native-elements";

import { Link } from "@react-navigation/native";
import { Text, View } from "../../../components/Themed";
import { RootTabScreenProps } from "../../../types";

import { signInStart, signInError } from "../../../store/auth/actions";
import { useDispatch, useSelector } from "react-redux";
import { isAuthUserLoadingSelector } from "../../../store/auth/selectors";
import styles from "./SignIn.styles";
import SignUp from "../signUp/SignUp";

export default function SignIn({ navigation }: RootTabScreenProps<"TabOne">) {
  const dispatch = useDispatch();
  const isAuthLoading = useSelector(isAuthUserLoadingSelector);
  const logIn = () => {
    dispatch(
      signInStart({ email: "PIDAR@dsad.com", password: "LOHSUkablyad" })
    );
  };

  return (
    <View style={styles.container}>
      <Input
        containerStyle={{}}
        inputContainerStyle={{}}
        errorMessage="Oops! that's not correct."
        errorStyle={{}}
        errorProps={{}}
        inputStyle={{}}
        leftIconContainerStyle={{}}
        rightIconContainerStyle={{}}
        placeholder="Enter E-mail"
      />
      <Input
        containerStyle={{}}
        inputContainerStyle={{}}
        errorMessage="Oops! that's not correct."
        errorStyle={{}}
        errorProps={{}}
        inputStyle={{}}
        leftIconContainerStyle={{}}
        rightIconContainerStyle={{}}
        placeholder="Enter password"
      />

      <Button
        style={styles.button}
        onPress={logIn}
        title="Login"
        accessibilityLabel="Learn more about this purple button"
        loading={isAuthLoading}
      />

      <Link to={{ screen: "SignUp" }}>Sign Up</Link>
    </View>
  );
}
