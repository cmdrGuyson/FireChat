import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SCREENS from "./constants/screens";
import ChatScreen from "./screens/chat";
import LoginScreen from "./screens/login";

const Stack = createStackNavigator();

const NavigationStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      component={LoginScreen}
      name={SCREENS.LOGIN_SCREEN}
      options={{ headerShown: false }}
    />
    <Stack.Screen component={ChatScreen} name={SCREENS.CHAT_SCREEN} />
  </Stack.Navigator>
);

const RootNavigator = () => (
  <NavigationContainer>
    <NavigationStack />
  </NavigationContainer>
);

export default function App() {
  return <RootNavigator />;
}
