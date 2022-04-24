import * as LocalAuthentication from "expo-local-authentication";

export const handleBiometricAuth = async () => {
  const biometricAuth = await LocalAuthentication.authenticateAsync({
    promptMessage: "Login with Biometrics",
    disableDeviceFallback: true,
  });
};
