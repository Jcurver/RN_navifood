import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { fpx } from "../../customStyle/px";
import { IChildren } from "../../interface/children";

const Subtitle = ({ children }: IChildren) => {
  return (
    <View style={S.subTitleContainer}>
      <Text style={S.subTitle}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const S = StyleSheet.create({
  subTitle: {
    color: "brown",
    fontSize: fpx(18),
    fontWeight: "bold",
    margin: 6,
    textAlign: "center",
  },
  subTitleContainer: {
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: "brown",
    borderBottomWidth: 2,
  },
});
