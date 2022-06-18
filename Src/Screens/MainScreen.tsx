import React from "react";
import { View } from "react-native";

import { MainContainer } from "../Containers/MainContainer";

import { GlobalStyles } from "../globalStyles";

interface Props {}

export const MainScreen: React.FC<Props> = ({}) => {
  return (
    <View style={GlobalStyles.globalWrapper}>
      <MainContainer />
    </View>
  );
};
