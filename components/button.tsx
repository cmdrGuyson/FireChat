import {
  View,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import React from "react";
import styles from "./button.styles";

interface IBigButton {
  onClick?: (event: GestureResponderEvent) => void;
  text: string;
}

const BigButton: React.FC<IBigButton> = ({ onClick, text }) => {
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={onClick}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BigButton;
