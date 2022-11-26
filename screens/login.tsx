import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";

import styles from "./login.styles";
import { SafeAreaView } from "react-native-safe-area-context";
import BigButton from "../components/button";
import { NavigationProp } from "@react-navigation/native";
import SCREENS from "../constants/screens";

const backgroundImage = require("../assets/back.jpeg");

export interface ILoginScreen {
  navigation: NavigationProp<any, any>;
}

const LoginScreen: React.FC<ILoginScreen> = ({ navigation }) => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const onClickLogin = () => {};

  const onClickRegister = () => {
    navigation.navigate(SCREENS.CHAT_SCREEN);
  };

  return (
    <View style={styles.container}>
      <Image source={backgroundImage} style={styles.background} />
      <View style={styles.body} />
      <SafeAreaView style={styles.form}>
        <Text style={styles.title}>FireChat</Text>
        <Text style={styles.subTitle}>By Guyson</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter email"
          onChangeText={setEmail}
          value={email}
          autoCapitalize="none"
          textContentType="emailAddress"
          keyboardType="email-address"
          autoFocus={true}
          autoCorrect={false}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          onChangeText={setPassword}
          value={password}
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="password"
          secureTextEntry={true}
        />
        <BigButton text="Login" onClick={onClickLogin} />
        <View style={styles.subContainer}>
          <Text style={styles.subContainerText}>
            Don't have an account yet?
          </Text>
          <TouchableOpacity onPress={onClickRegister}>
            <Text style={styles.subContainerButton}> Register</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default LoginScreen;
