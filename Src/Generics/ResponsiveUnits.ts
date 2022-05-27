import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

type UnitScale = number;

export const RWidth = (arg: UnitScale) => {
  return responsiveWidth(arg);
};

export const RHeight = (arg: UnitScale) => {
  return responsiveHeight(arg);
};

export const RFontSize = (arg: UnitScale) => {
  return responsiveFontSize(arg);
};
