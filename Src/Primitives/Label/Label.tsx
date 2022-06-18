import React from "react";
import { StyleProp, Text, TextProps, TextStyle } from "react-native";
import { PrimitiveLabelProps } from "../Types";

import { LabelStyles } from "./style";

export const Label: React.FC<PrimitiveLabelProps> = ({
  value = "",
  style = {},
  ...rest
}) => {
  return (
    <Text style={[LabelStyles.labelStyle, style]} {...rest}>
      {value}
    </Text>
  );
};

export default React.memo(Label);
