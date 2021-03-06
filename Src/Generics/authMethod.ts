import * as LocalAuthentication from "expo-local-authentication";

export const handleBiometricAuth = async () => {
  const biometricAuth = await LocalAuthentication.authenticateAsync({
    promptMessage: "Touch To Sign In",
    disableDeviceFallback: true,
  });

  return biometricAuth;
};
