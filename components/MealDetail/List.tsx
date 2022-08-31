import React from "react";
import { View, Text, StyleSheet } from "react-native";

const List = ({ data }: any) => {
  return data.map((dataPoint: string) => (
    <View key={dataPoint} style={S.listItem}>
      <Text style={S.itemText}>{dataPoint}</Text>
    </View>
  ));
};

export default List;

const S = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
  },
});
