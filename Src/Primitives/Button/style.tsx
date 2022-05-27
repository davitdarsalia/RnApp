import { StyleSheet } from "react-native";
import { ColorList } from "../../Constants/Colors";
import { fontSizes } from "../../Constants/Enums";
import { width, height } from "../../Constants/Layout";
import { RWidth, RHeight } from "../../Generics/ResponsiveUnits";

export const ButtonStyles = StyleSheet.create({
  wrapper: {
    width: RWidth(40),
    height: RHeight(6),
    backgroundColor: ColorList.Green,
    alignSelf: "center",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});
