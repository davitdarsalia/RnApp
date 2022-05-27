import React from "react";

import { SafeAreaView } from "react-native";
import { AuthContainer } from "../Containers/AuthContainer";

interface Props {}

export const AuthScreen: React.FC<Props> = ({}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <AuthContainer />
    </SafeAreaView>
  );
};
