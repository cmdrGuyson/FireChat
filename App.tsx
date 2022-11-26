import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SCREENS from "./constants/screens";
import ChatScreen from "./screens/chat";
import LoginScreen from "./screens/login";
import RegisterScreen from "./screens/register";
import Toast from "react-native-toast-message";

const Stack = createStackNavigator();

const NavigationStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen component={LoginScreen} name={SCREENS.LOGIN_SCREEN} />
    <Stack.Screen component={RegisterScreen} name={SCREENS.REGISTER_SCREEN} />
    <Stack.Screen component={ChatScreen} name={SCREENS.CHAT_SCREEN} />
  </Stack.Navigator>
);

const RootNavigator = () => (
  <NavigationContainer>
    <NavigationStack />
  </NavigationContainer>
);

export default function App() {
  return (
    <>
      <RootNavigator />
      <Toast />
    </>
  );
}
