import { StyleSheet } from "react-native";
import { ColorList } from "../../Constants/Colors";
import { fontSizes } from "../../Constants/Enums";
import { width, height } from "../../Constants/Layout";

export const InputStyles = StyleSheet.create({
  textInput: {
    width: width - width * 0.07,
    height: height * 0.08,
    alignSelf: "center",
    borderRadius: width * 0.02,
    paddingHorizontal: width * 0.05,
    fontSize: fontSizes.inputSize,
    backgroundColor: ColorList.Liberty,
    position: "relative",
    color: ColorList.Blue,
  },
  outerWrapper: {
    marginVertical: width * 0.02,
  },
  errorView: {
    position: "absolute",
    zIndex: 1,
    height: width * 0.05,
    paddingHorizontal: width * 0.02,
    right: width * 0.1,
    bottom: width * 0.14,
  },
  errorTextStyle: {
    fontSize: fontSizes.errorTextSize,
    color: ColorList.BrightBlue,
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
