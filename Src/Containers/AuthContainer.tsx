import React, { useEffect, useState } from "react";
import { Button, SafeAreaView } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";

import { handleBiometricAuth } from "../Generics/authMethod";
import { GenericInput } from "../Primitives/GenericInput/GenericInput";
import { AuthForm } from "../Forms/AuthForm/AuthForm";

interface Props {}

export const AuthContainer: React.FC<Props> = ({}) => {
  const [isBiometrySupported, setIsBiometrySupported] = useState(false);

  useEffect(() => {
    async () => {
      const isCompatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometrySupported(isCompatible);
    };
  }, []);
  return (
    <SafeAreaView>
      <SafeAreaView>
        <Button onPress={handleBiometricAuth} title="Scan"></Button>
        <AuthForm />
      </SafeAreaView>
    </SafeAreaView>
  );
};
