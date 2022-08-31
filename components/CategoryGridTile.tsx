import React from "react";
import { View, Text, StyleSheet, Pressable, GestureResponderEvent } from "react-native";
import { center } from "../customStyle/center";
import { overflow } from "../customStyle/overflow";
import { shadow } from "../customStyle/shadow";
import { useNavigation } from "@react-navigation/native";

interface ICategoryGridTile {
  title: string;
  color: string;
  onPress: (event: GestureResponderEvent) => void;
}

const CategoryGridTile = ({ title, color, onPress }: ICategoryGridTile) => {
  // 컴포넌트에서 네비게이션 할때는 훅을 사용하면된다.
  const navigation = useNavigation();

  return (
    <View style={[S.gridItem]}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [S.button, pressed ? S.buttonPressed : null]}
        onPress={onPress}
      >
        <View style={[S.innerContainer, { backgroundColor: color }]}>
          <Text style={S.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const S = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    ...shadow,
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    ...center,
    borderRadius: 8,
    flex: 1,
    padding: 16,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
