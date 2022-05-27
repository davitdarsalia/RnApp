import { StyleSheet } from "react-native";

import { ColorList } from "../../Constants/Colors";
import { fontSizes } from "../../Constants/Enums";

import { RHeight, RWidth } from "../../Generics/ResponsiveUnits";

export const InputStyles = StyleSheet.create({
  outerWrapper: {
    marginVertical: RWidth(2),
  },
  errorView: {
    height: RHeight(2.5),
    paddingHorizontal: RWidth(1),
    right: RHeight(5),
    bottom: RHeight(6.5),
    borderRadius: RWidth(0.5),
    position: "absolute",
    backgroundColor: ColorList.White,
    zIndex: 1,
  },
  errorTextStyle: {
    fontSize: fontSizes.errorTextSize,
    color: ColorList.BrightBlue,
  },
  textInput: {
    width: RWidth(90),
    height: RHeight(8),
    borderRadius: RWidth(2),
    borderWidth: 0,
    paddingHorizontal: RWidth(5),
    alignSelf: "center",
    fontSize: fontSizes.inputSize,
    backgroundColor: ColorList.Liberty,
    position: "relative",
    color: ColorList.Blue,
  },
  textInputFocused: {
    width: RWidth(90),
    height: RHeight(8),
    borderRadius: RWidth(2),
    paddingHorizontal: RWidth(5),
    alignSelf: "center",
    fontSize: fontSizes.inputSize,
    backgroundColor: ColorList.White,
    borderWidth: 1,
    borderColor: ColorList.EditBlue,
    position: "relative",
    color: ColorList.Blue,
  },
  textInputError: {
    width: RWidth(90),
    height: RHeight(8),
    borderRadius: RWidth(2),
    paddingHorizontal: RWidth(5),
    alignSelf: "center",
    fontSize: fontSizes.inputSize,
    backgroundColor: ColorList.White,
    borderWidth: 1,
    borderColor: ColorList.ErrorRed,
    position: "relative",
    color: ColorList.Blue,
  },
  errorTextBorderError: {
    borderWidth: 1,
    borderColor: ColorList.ErrorRed,
  },
  errorTextBorder: {
    borderWidth: 1,
    borderColor: ColorList.Blue,
  },
});
