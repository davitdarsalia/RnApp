import React, { useEffect, useState } from "react";
import { Button, SafeAreaView } from "react-native";

import * as LocalAuthentication from "expo-local-authentication";

import { handleBiometricAuth } from "../Generics/authMethod";
import { AuthForm } from "../Forms/AuthForm/AuthForm";
import { WrapperModal } from "../Components/WrapperModel/WrapperModel";

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
    <SafeAreaView style={{ position: "relative" }}>
      <WrapperModal>
        <AuthForm />
      </WrapperModal>
      {/* <Button onPress={handleBiometricAuth} title="Scan"></Button> */}
    </SafeAreaView>
  );
};
