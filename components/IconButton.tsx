import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface IIconButton {
  onPress: () => void;
  icon: any;
  color: string;
}

const IconButton = ({ icon, color, onPress }: IIconButton): JSX.Element => {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => pressed && S.pressed}>
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
};

export default IconButton;

const S = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
