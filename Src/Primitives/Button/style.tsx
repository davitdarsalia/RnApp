import { StyleSheet } from "react-native";
import { ColorList } from "../../Constants/Colors";
import { fontSizes } from "../../Constants/Enums";
import { width, height } from "../../Constants/Layout";

export const ButtonStyles = StyleSheet.create({
  wrapper: {
    width: width * 0.4,
    height: width * 0.13,
    backgroundColor: ColorList.Green,
    alignSelf: "center",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});
