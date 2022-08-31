import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useLayoutEffect, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { RootStackParamList } from "../App";
import MealItem, { IMealItem } from "../components/MealItem";
import { px } from "../customStyle/px";
import { MEALS, CATEGORIES } from "../data/dummy-data";

type Props = NativeStackScreenProps<RootStackParamList, "MealsOverview">;

const MealsOverviewScreen = ({ route, navigation }: Props) => {
  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter(mealItem => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle: string = CATEGORIES.find(category => category.id === catId)?.title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  const renderMealItem = (itemData: any) => {
    const item = itemData.item;
    const mealItemProps: IMealItem = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };
    return <MealItem {...mealItemProps} />;
  };

  return (
    <View style={S.container}>
      <FlatList data={displayedMeals} keyExtractor={item => item.id} renderItem={renderMealItem} />
    </View>
  );
};

export default MealsOverviewScreen;

const S = StyleSheet.create({
  container: {
    flex: 1,
    padding: px(16),
  },
});
