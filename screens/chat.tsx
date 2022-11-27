import { NavigationProp } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";

export interface IChatScreen {
  navigation: NavigationProp<any, any>;
}

const ChatScreen: React.FC<IChatScreen> = ({ navigation }) => {
  return <GiftedChat />;
};

export default ChatScreen;
