import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView, Button } from "react-native";
import { RootStackParamList } from "../App";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import MealDetails from "../components/MealDetails";
import { fpx, hpx } from "../customStyle/px";
import { MEALS } from "../data/dummy-data";
import IconButton from "../components/IconButton";

type Props = NativeStackScreenProps<RootStackParamList, "MealDetail">;

const MealDetailScreen = ({ route, navigation }: Props) => {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  const headerButtonPressHandler = () => {
    console.log("pressed!");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton icon="star" color="white" onPress={headerButtonPressHandler} />;
      },
    });
  }, [navigation, headerButtonPressHandler]);

  return (
    <ScrollView style={S.rootContainer}>
      <Image style={S.image} source={{ uri: selectedMeal?.imageUrl }} />
      <Text style={S.title}>{selectedMeal?.title}</Text>
      <MealDetails
        duration={selectedMeal?.duration}
        complexity={selectedMeal?.complexity}
        affordability={selectedMeal?.affordability}
      />
      <View style={S.listOuterContainer}>
        <View style={S.listContainer}>
          <Subtitle>ingredients</Subtitle>
          <List data={selectedMeal?.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal?.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const S = StyleSheet.create({
  rootContainer: {
    marginBottom: hpx(32),
  },
  image: {
    width: "100%",
    height: hpx(350),
  },
  title: {
    fontWeight: "bold",
    fontSize: fpx(24),
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
