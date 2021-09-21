import * as React from "react";
import { Image } from "react-native";
import { Button, Card } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";

import { Text, View } from "../../components/Themed";
import { logoutStart } from "../../store/auth/actions";
import { currentUserSelector } from "../../store/auth/selectors";
import styles from "./Profile.styles";

export default function Profile() {
  const dispatch = useDispatch()
  const user = useSelector(currentUserSelector);

  return (
    <View style={styles.container}>
      <Card>
        <View style={styles.user}>
          <Image style={styles.image}
            source={{ uri: user?.avatar_url }}
          />
          <Text>Name: {user?.name}</Text>
          <Text>Email: {user?.email}</Text>
        </View>
      </Card>
      <View style={styles.bottom}>
        <Button style={styles.button}
          onPress={() => {
            dispatch(logoutStart());
          }}
          title="Logout"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    </View>
  );
}

