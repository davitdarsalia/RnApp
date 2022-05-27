import React from "react";
import { View } from "react-native";

import { AuthContainer } from "../Containers/AuthContainer";

interface Props {}

export const AuthScreen: React.FC<Props> = ({}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#0057B8",
        position: "relative",
      }}
    >
      <AuthContainer />
    </View>
  );
};
