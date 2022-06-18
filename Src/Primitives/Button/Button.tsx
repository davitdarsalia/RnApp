import React from "react";
import {
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
} from "react-native";

import { ColorList } from "../../Constants/Colors";
import { Label } from "../Label/Label";
import { PrimitiveButtonProps } from "../Types";

import { ButtonStyles } from "./style";

export const Button: React.FC<PrimitiveButtonProps> = ({
  title = "",
  onPress = () => {},
  onLongPress = () => {},
  hitSlop = { left: 5, right: 5, top: 5, bottom: 5 },
  style = {},
  labelStyle = {},
  disabled = false,
  activeOpacity = 0.7,
  loading = false,
  accessibilityLabel = "",
}) => {
  return (
    <TouchableOpacity
      accessible={true}
      accessibilityLabel={accessibilityLabel}
      testID={accessibilityLabel}
      style={[
        disabled ? ButtonStyles.disabledWrapper : ButtonStyles.wrapper,
        style,
      ]}
      disabled={disabled}
      hitSlop={hitSlop}
      onPress={!disabled ? onPress : () => {}}
      onLongPress={onLongPress}
      activeOpacity={!disabled ? activeOpacity : 1}
    >
      {loading ? (
        <ActivityIndicator color={ColorList.DarkerWhite} size={"small"} />
      ) : (
        <Label value={title} style={labelStyle} />
      )}
    </TouchableOpacity>
  );
};
