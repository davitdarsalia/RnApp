import { RefObject } from "react";
import {
  StyleProp,
  ViewStyle,
  TextStyle,
  KeyboardTypeOptions,
  ReturnKeyTypeOptions,
  TextProps,
} from "react-native";
import { ColorList } from "../Constants/Colors";
import { autoCapitalizeOptions } from "../Constants/Enums";

export interface PrimitiveButtonProps {
  onPress: () => void;
  onLongPress?: () => void;
  hitSlop?: {
    left: number;
    right: number;
    top: number;
    bottom: number;
  };
  title: string;
  style?: StyleProp<ViewStyle>;
  labelStyle?: TextStyle;
  disabled?: boolean;
  activeOpacity?: number;
  loading?: boolean;
  accessibilityLabel?: string;
}

export interface GenericInputProps<T> {
  value: string;
  touched: boolean | undefined;
  errors: string | undefined;
  accessibilityLabel?: string;
  style?: StyleProp<TextStyle> | undefined;
  keyboardType?: KeyboardTypeOptions;
  placeholder: string;
  placeholderTextColor?: ColorList;
  labelTitle?: string;
  passwordMode?: boolean;
  warningText?: string;
  isSearch?: boolean;
  secureTextEntry?: boolean;
  maxLength?: number;
  numberOfLines?: number;
  autoFocus?: boolean;
  inputRef?: RefObject<T>;
  blurOnSubmit?: boolean;
  returnKeyType?: ReturnKeyTypeOptions;
  autoCapitalize?: autoCapitalizeOptions;
  autoCorrect?: boolean;
  errorText?: string;
  onChangeText: (val: string) => void;
  onSubmitEditing?: () => void;
  onBlur?: () => void;
  onFocus?: () => void;
  onEndEditing?: () => void;
}

export interface PrimitiveLabelProps {
  value: string | number;
  style?: StyleProp<TextStyle>;
  rest?: TextProps;
}
