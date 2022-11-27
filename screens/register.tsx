import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";

import styles from "./login.styles";
import { SafeAreaView } from "react-native-safe-area-context";
import BigButton from "../components/button";
import { NavigationProp } from "@react-navigation/native";
import SCREENS from "../constants/screens";
import { displayError, displayMessage } from "../utils/common";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

const backgroundImage = require("../assets/back.jpeg");

export interface IRegisterScreen {
  navigation: NavigationProp<any, any>;
}

const RegisterScreen: React.FC<IRegisterScreen> = ({ navigation }) => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [confirmPassword, setConfirmPassword] = React.useState<string>("");

  const onClickLogin = () => {
    navigation.navigate(SCREENS.LOGIN_SCREEN);
  };

  const onClickRegister = async () => {
    try {
      if (!(email && password && confirmPassword)) return;
      if (password !== confirmPassword) throw new Error("Passwords dont match");
      await createUserWithEmailAndPassword(auth, email, password);
      displayMessage("Successfully registered!");
    } catch (error) {
      displayError(error);
    }
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
        <TextInput
          style={styles.input}
          placeholder="Confirm password"
          onChangeText={setConfirmPassword}
          value={confirmPassword}
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="password"
          secureTextEntry={true}
        />
        <BigButton text="Register" onClick={onClickRegister} />
        <View style={styles.subContainer}>
          <Text style={styles.subContainerText}>Already have an account?</Text>
          <TouchableOpacity onPress={onClickLogin}>
            <Text style={styles.subContainerButton}> Login</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default RegisterScreen;
