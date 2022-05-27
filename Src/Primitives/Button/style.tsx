import { StyleSheet } from "react-native";
import { ColorList } from "../../Constants/Colors";
import { RWidth, RHeight } from "../../Generics/ResponsiveUnits";

export const ButtonStyles = StyleSheet.create({
  wrapper: {
    width: RWidth(40),
    height: RHeight(6),
    marginVertical: RWidth(0.5),
    backgroundColor: ColorList.Green,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: RWidth(0.5),
    borderRadius: RWidth(2),
    borderColor: ColorList.BrightGreen,

    //Shadow

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  disabledWrapper: {
    width: RWidth(40),
    height: RHeight(6),
    marginVertical: RWidth(0.5),
    backgroundColor: ColorList.DisabledGreen,
    alignSelf: "center",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",

    //Shadow Properties
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
});
