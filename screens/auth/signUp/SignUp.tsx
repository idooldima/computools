import * as React from "react";

import { View } from "../../../components/Themed";
import { RootTabScreenProps } from "../../../types";
import { Link } from "@react-navigation/native";
import { Button, Input, } from "react-native-elements"
import * as yup from 'yup'
import styles from "./SignUp.styles"
import { signUpStart } from "../../../store/auth/actions";
import { useDispatch } from "react-redux";



export default function SignUp({ navigation }: RootTabScreenProps<"TabOne">) {
  const dispatch = useDispatch()

  const [state, setState] = React.useState({ email: '', password: '', passwordConfirmation: '' })
  const [validateState, setValidateState] = React.useState({ errEmail: '', errPassword: '', errPasswordConfirmation: '' })

  const schema = yup.object({
    email: yup.string().required().matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'email is not valid'),
    password: yup.string().required().min(8),
    passwordConfirmation: yup.string()
      .test('passwords-match', 'Passwords must match', function (value) {
        return state.password === value

      })
  })

  const signUp = () => {
    dispatch(
      signUpStart({ email: state.email, password: state.password })
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
        containerStyle={{}}
        inputContainerStyle={{}}
        errorMessage={validateState.errPassword}
        placeholder="Enter password"
      />
      <Input
        secureTextEntry={true}
        onChangeText={(passwordConfirmation) => {
          setState({ ...state, passwordConfirmation });
          schema.validateAt("passwordConfirmation", { passwordConfirmation }).then(() => setValidateState({ ...validateState, errPasswordConfirmation: '' })).catch(function (err) {
            setValidateState({ ...validateState, errPasswordConfirmation: err.errors[0] })
            console.log(err.errors)
          });
        }}

        errorMessage={validateState.errPasswordConfirmation}

        placeholder="Confirm your password"
      />

      <Button
        disabled={!state.email || !state.password || !state.passwordConfirmation || !!validateState.errEmail || !!validateState.errPassword || !!validateState.errPasswordConfirmation}
        style={styles.button}
        onPress={signUp}
        title="Register"
        accessibilityLabel="Learn more about this purple button"
      />

      <Link to={{ screen: "SignIn" }}>Login</Link>
    </View>
  );
}


