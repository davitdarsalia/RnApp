import React from "react";
import { StyleProp, Text, TextProps, TextStyle } from "react-native";

import { LabelStyles } from "./style";

interface Props {
  value: string | number;
  style?: StyleProp<TextStyle>;
  rest?: TextProps;
}

export const Label: React.FC<Props> = ({ value = "", style = {}, ...rest }) => {
  return (
    <Text style={[LabelStyles.labelStyle, style]} {...rest}>
      {value}
    </Text>
  );
};

export default React.memo(Label);
