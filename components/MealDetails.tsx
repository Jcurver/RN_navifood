import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { center } from "../customStyle/center";
import { fpx, px } from "../customStyle/px";

interface IMealDetails {
  duration: string;
  complexity: string;
  affordability: string;
}

const MealDetails = ({ duration, complexity, affordability }: IMealDetails) => {
  return (
    <View style={S.details}>
      <Text style={S.detailItem}>{duration}m</Text>
      <Text style={S.detailItem}>{complexity.toUpperCase()}</Text>
      <Text style={S.detailItem}>{affordability.toUpperCase()}</Text>
    </View>
  );
};

export default MealDetails;

const S = StyleSheet.create({
  screen: {
    flex: 1,
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
});
