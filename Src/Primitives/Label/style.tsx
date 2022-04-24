import { StyleSheet } from "react-native";

import { ColorList } from "../../Constants/Colors";
import { fontSizes } from "../../Constants/Enums";

export const LabelStyles = StyleSheet.create({
  labelStyle: {
    fontSize: fontSizes.inputSize + 3,
    fontWeight: "400",
    color: ColorList.White,
  },
});
