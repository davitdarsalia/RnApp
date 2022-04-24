import React, { useEffect, useState } from "react";
import { View, Button } from "react-native";
import { handleBiometricAuth } from "../Generics/authMethod";

import * as LocalAuthentication from "expo-local-authentication";
import { GenericInput } from "../Primitives/GenericInput/GenericInput";
import { SafeAreaView } from "react-native-safe-area-context";

import { AuthContainer } from "../Containers/AuthContainer";

interface Props {}

export const AuthScreen: React.FC<Props> = ({}) => {
  return (
    <SafeAreaView>
      <AuthContainer />
    </SafeAreaView>
  );
};
