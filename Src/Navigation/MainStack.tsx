import React from "react";
import { TouchableOpacity, View } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainStackParamList } from "../../types";

import { HomeScreen } from "../Screens/HomeScreen";

import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import { RHeight, RWidth } from "../Generics/ResponsiveUnits";
import { ColorList } from "../Constants/Colors";

import { GlobalStyles } from "../globalStyles";
import { CartScreen } from "../Screens/CartScreen";
import { FavouritesScreen } from "../Screens/FavouritesScreen";
import { ProfileScreen } from "../Screens/ProfileScreen";

const Tab = createBottomTabNavigator<MainStackParamList>();

export const MainStack = () => {
  const { Screen, Navigator } = Tab;

  return (
    <Navigator>
      <Screen name="cart" component={CartScreen} />
      <Screen name="profile" component={ProfileScreen} />
    </Navigator>
  );
};
