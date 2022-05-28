import React, { useEffect, useState } from "react";
import {
  Button,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

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
    <KeyboardAwareScrollView
      enableAutomaticScroll
      scrollEnabled
      extraHeight={100}
      style={{ position: "relative", backgroundColor: "#0057B8", flex: 1 }}
      resetScrollToCoords={{ x: 0, y: 0 }}
    >
      <WrapperModal>
        <AuthForm />
      </WrapperModal>
      {/* <Button onPress={handleBiometricAuth} title="Scan"></Button> */}
    </KeyboardAwareScrollView>
  );
};
