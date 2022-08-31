import React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { center } from "../customStyle/center";
import { fpx, px } from "../customStyle/px";
import { shadow } from "../customStyle/shadow";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../App";
import MealDetails from "./MealDetails";

export interface IMealItem {
  id: string;
  title: string;
  imageUrl: string;
  duration: string;
  complexity: string;
  affordability: string;
}

const MealItem = ({ id, title, imageUrl, duration, complexity, affordability }: IMealItem) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const selectMealItemHandler = () => {
    navigation.navigate("MealDetail", {
      mealId: id,
    });
  };

  return (
    <View style={S.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? S.buttonPressed : null)}
        onPress={selectMealItemHandler}
      >
        <View style={S.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={S.image} />
            <Text style={S.title}>{title}</Text>
          </View>
          <MealDetails duration={duration} complexity={complexity} affordability={affordability} />

        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const S = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    ...shadow,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
    overflow: "hidden",
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: fpx(12),
    margin: 8,
  },
  details: {
    flexDirection: "row",
    padding: px(8),
    ...center,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: fpx(12),
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
