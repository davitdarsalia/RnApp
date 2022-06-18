import React, { useEffect, useState } from "react";
import { TouchableOpacity, StyleProp, ViewStyle } from "react-native";

import { handleBiometricAuth } from "../../Generics/authMethod";
import { AuthMethods } from "../../Constants/Enums";

import { Button } from "../../Primitives/Button/Button";

interface Props {
  method: AuthMethods;
  buttonStyle?: StyleProp<ViewStyle>;
  buttonHeader?: string;
}

export const BiometryAuth: React.FC<Props> = ({
  method = "Button",
  buttonStyle = {},
  buttonHeader = "",
}) => {
  const [authSuccess, setAuthSuccess] = useState<boolean>(false);

  useEffect(() => {
    if (method === AuthMethods.InvisibleComponent) {
      handleBiometricAuth().then((res) => {
        setAuthSuccess(res.success);
      });
    }
  }, [method]);

  return method === AuthMethods.Button ? (
    <Button
      style={buttonStyle}
      onPress={handleBiometricAuth}
      title={buttonHeader}
    />
  ) : (
    <TouchableOpacity onPress={handleBiometricAuth}></TouchableOpacity>
  );
};
