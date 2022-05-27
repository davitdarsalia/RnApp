import {
  ReactChild,
  ReactNode,
} from "hoist-non-react-statics/node_modules/@types/react";
import React from "react";
import { View, StyleProp, ViewStyle } from "react-native";

import { ModalStyles } from "./style";

interface Props {
  children: ReactNode | ReactChild;
  style?: StyleProp<ViewStyle>;
}

export const WrapperModal: React.FC<Props> = ({ children }) => {
  return <View style={ModalStyles.modalWrapper}>{children}</View>;
};
