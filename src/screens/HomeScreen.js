import React from "react";
import { View, StyleSheet, Button } from "react-native";
import auth from "@react-native-firebase/auth";
export const HomeScreen = () => {
  const handleLogout = ({ navigation }) => {
    auth()
      .signOut()
      .then(() => navigation.navigate("Login"))
      .catch((error) => console.log("Error logging out: ", error));
  };
  return (
    <View style={styles.container}>
      <Button title="Sign Out" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
