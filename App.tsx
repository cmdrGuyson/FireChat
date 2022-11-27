import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SCREENS from "./constants/screens";
import ChatScreen from "./screens/chat";
import LoginScreen from "./screens/login";
import RegisterScreen from "./screens/register";
import Toast from "react-native-toast-message";
import { FirebaseUserProvider, useFirebaseUser } from "./context/auth";
import { ActivityIndicator, Button, View } from "react-native";
import React from "react";
import { displayError, displayMessage } from "./utils/common";
import { signOut } from "firebase/auth";
import { auth } from "./config/firebase";

const Stack = createStackNavigator();

const AuthenticatedStack = () => {
  const { setUser } = useFirebaseUser();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      displayMessage("Successfully logged out!");
      setUser(null);
    } catch (error) {
      displayError(error);
    }
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        component={ChatScreen}
        name={SCREENS.CHAT_SCREEN}
        options={{
          headerRight: () => (
            <Button onPress={handleLogout} title="Logout" color="#3960c9" />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const UnauthenticatedStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen component={LoginScreen} name={SCREENS.LOGIN_SCREEN} />
    <Stack.Screen component={RegisterScreen} name={SCREENS.REGISTER_SCREEN} />
  </Stack.Navigator>
);

const RootNavigator = () => {
  const { user, isLoading } = useFirebaseUser();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {user ? <AuthenticatedStack /> : <UnauthenticatedStack />}
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <FirebaseUserProvider>
      <RootNavigator />
      <Toast />
    </FirebaseUserProvider>
  );
}
