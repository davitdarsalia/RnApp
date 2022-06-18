import { StyleSheet } from "react-native";

import { RWidth } from "./Generics/ResponsiveUnits";

export const GlobalStyles = StyleSheet.create({
  globalWrapper: {
    flex: 1,
    position: "relative",
  },
  globalWrapperAuth: {
    flex: 1,

    position: "relative",
    backgroundColor: "#0057B8",
  },
  navigationIconStyles: {
    position: "absolute",
    top: RWidth(3),
  },
});
