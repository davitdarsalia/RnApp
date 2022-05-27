import { StyleSheet } from "react-native";
import { ColorList } from "../../Constants/Colors";
import { RHeight, RWidth } from "../../Generics/ResponsiveUnits";

export const ModalStyles = StyleSheet.create({
  modalWrapper: {
    paddingHorizontal: RWidth(10),
    paddingVertical: RWidth(10),
    width: RWidth(100),
    height: RHeight(70),
    backgroundColor: ColorList.White,
    borderRadius: RWidth(4),
    position: "absolute",
    bottom: RHeight(-100),
    zIndex: 100,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: RWidth(0.1),
    },
    shadowOpacity: 0.23,
    shadowRadius: 11.27,
    elevation: 14,
  },
});
