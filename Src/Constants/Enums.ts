import { RFontSize } from "../Generics/ResponsiveUnits";

export enum autoCapitalizeOptions {
  none = "none",
  sentences = "sentences",
  words = "words",
  characters = "characters",
}

export enum fontSizes {
  inputSize = 16,
  errorTextSize = RFontSize(1.4),
}

export enum AuthMethods {
  Button = "Button",
  InvisibleComponent = "InvisibleComponent",
}
