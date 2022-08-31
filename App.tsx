import React from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Category from "./models/category";
import MealDetailScreen from "./screens/MealDetailScreen";

export type RootStackParamList = {
  MealsOverview: { categoryId: string | undefined };
  MealsCategories: Category;
  MealDetail: { mealId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <>
      <StatusBar style="light"></StatusBar>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="MealsCategories"
          screenOptions={{
            headerStyle: { backgroundColor: "brown" },
            headerTintColor: "#9ddb94",
            contentStyle: { backgroundColor: "#f7cbcb" },
            // headerShown: false,
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            options={({ route }) => {
              const catId = route.params.categoryId;
              return {
                title: catId,
              };
            }}
          />
          <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}
            // options={{
            //   headerRight: () => {
            //     return <Button title="Tap Me!" onPress={}>In the Header</Button>;
            //   },
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
