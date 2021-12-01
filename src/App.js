import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  ForgotPasswordScreen,
  HomeScreen,
  LoginScreen,
  SignupScreen,
} from "./screens";
import { AuthenticatedUserProvider } from "./providers";
import { RootNavigator } from "./navigation/RootNavigator";

const App = () => {
  return (
    <AuthenticatedUserProvider>
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
    </AuthenticatedUserProvider>
  );
};

export default App;
