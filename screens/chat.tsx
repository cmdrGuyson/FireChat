import { NavigationProp } from "@react-navigation/native";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { GiftedChat, IMessage } from "react-native-gifted-chat";
import { auth, firestore } from "../config/firebase";
import COLLECTIONS from "../constants/collections";
import { displayError } from "../utils/common";

export interface IChatScreen {
  navigation: NavigationProp<any, any>;
}

const ChatScreen: React.FC<IChatScreen> = ({ navigation }) => {
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    const collectionReference = collection(firestore, COLLECTIONS.MESSAGES);
    const messageQuery = query(
      collectionReference,
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(messageQuery, (snapshot) => {
      const msgs: IMessage[] = snapshot.docs.map((doc) => ({
        _id: doc.id,
        text: doc.data().text,
        user: doc.data().user,
        createdAt: doc.data().createdAt.toDate(),
      }));
      setMessages(msgs);
    });

    return unsubscribe;
  });

  const onSendMessage = async (messages: IMessage[]) => {
    try {
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, messages)
      );
      const { _id, createdAt, text, user } = messages[0];
      console.log(user);
      await addDoc(collection(firestore, COLLECTIONS.MESSAGES), {
        _id,
        createdAt,
        text,
        user,
      });
    } catch (error) {
      displayError(error);
    }
  };

  if (!auth.currentUser?.email) return null;

  return (
    <GiftedChat
      messages={messages}
      onSend={onSendMessage}
      user={{
        _id: auth.currentUser.email,
        avatar: "https://i.pravatar.cc/400",
      }}
      messagesContainerStyle={{ backgroundColor: "#FFF" }}
      renderAvatarOnTop
      showUserAvatar
    />
  );
};

export default ChatScreen;
