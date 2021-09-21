import * as React from "react";
import { Button, Input } from "react-native-elements";

import { Link } from "@react-navigation/native";
import { View } from "../../../components/Themed";
import { RootTabScreenProps } from "../../../types";
import * as yup from 'yup'


import { signInStart, signInError } from "../../../store/auth/actions";
import { useDispatch, useSelector } from "react-redux";
import { isAuthUserLoadingSelector } from "../../../store/auth/selectors";
import styles from "./SignIn.styles";





export default function SignIn({ navigation }: RootTabScreenProps<"TabOne">) {
  const dispatch = useDispatch();
  const isAuthLoading = useSelector(isAuthUserLoadingSelector);
  const schema = yup.object().shape({
    email: yup.string().required().matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'email is not valid'),
    password: yup.string().required().min(8),

  })

  const [state, setState] = React.useState({ email: '', password: '' })
  const [validateState, setValidateState] = React.useState({ errEmail: '', errPassword: '' })

  const logIn = () => {
    dispatch(
      signInStart({ email: state.email, password: state.password })
    );
  };


  return (
    <View style={styles.container}>
      <Input
        onChangeText={(email) => {
          setState({ ...state, email });
          schema.validateAt("email", { email }).then(() => setValidateState({ ...validateState, errEmail: '' })).catch(function (err) {
            setValidateState({ ...validateState, errEmail: err.errors[0] })
          });
        }}
        errorMessage={validateState.errEmail}
        placeholder="Enter E-mail"
      />
      <Input
        secureTextEntry={true}
        onChangeText={(password) => {
          setState({ ...state, password });
          schema.validateAt("password", { password }).then(() => setValidateState({ ...validateState, errPassword: '' })).catch(function (err) {
            setValidateState({ ...validateState, errPassword: err.errors[0] })
          });
        }}
        errorMessage={validateState.errPassword}
        placeholder="Enter password"
      />

      <Button
        disabled={!state.email || !state.password || !!validateState.errEmail || !!validateState.errPassword}
        style={styles.button}
        onPress={logIn}
        title="Login"
        accessibilityLabel="Learn more about this purple button"
        loading={isAuthLoading}
      />

      <Link to={{ screen: "SignUp" }}>If you don`t have accaunt, please register</Link>
    </View>
  );
}
