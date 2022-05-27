import React, { RefObject, createRef } from "react";
import {
  TextStyle,
  KeyboardTypeOptions,
  StyleProp,
  ReturnKeyTypeOptions,
  TextInput,
  View,
  Text,
  ViewStyle,
} from "react-native";

import { ColorList } from "../../Constants/Colors";
import { autoCapitalizeOptions } from "../../Constants/Enums";

import { InputStyles } from "./style";

interface Props<T> {
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

const GenericInput: React.FC<Props<any>> = ({
  accessibilityLabel = "",
  touched = false,
  value = "",
  onChangeText = () => {},
  style = {},
  keyboardType = "default",
  placeholder = "",
  placeholderTextColor = ColorList.Gray,
  onBlur = () => {},
  onFocus = () => {},
  secureTextEntry = false,
  maxLength = undefined,
  numberOfLines = undefined,
  autoFocus = false,
  inputRef = createRef(),
  blurOnSubmit = true,
  onSubmitEditing = () => {},
  returnKeyType = "default",
  autoCapitalize = "none",
  autoCorrect = false,
  errorText = "",
}) => {
  return (
    <View style={InputStyles.outerWrapper}>
      {touched && errorText != "" && (
        <View style={InputStyles.errorView}>
          <Text style={InputStyles.errorTextStyle}>{errorText}</Text>
        </View>
      )}
      <TextInput
        onChangeText={onChangeText}
        onBlur={onBlur}
        onFocus={onFocus}
        onSubmitEditing={onSubmitEditing}
        accessible={true}
        accessibilityLabel={accessibilityLabel}
        testID={accessibilityLabel}
        ref={inputRef}
        style={[
          touched && errorText === ""
            ? InputStyles.textInputFocused
            : InputStyles.textInputError,
          !touched && InputStyles.textInput,
          style,
        ]}
        value={value}
        keyboardType={keyboardType}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={secureTextEntry}
        maxLength={maxLength}
        numberOfLines={numberOfLines}
        autoFocus={autoFocus}
        blurOnSubmit={blurOnSubmit}
        returnKeyType={returnKeyType}
        autoCapitalize={autoCapitalizeOptions.none}
        autoCorrect={autoCorrect}
      />
    </View>
  );
};

export default React.memo(GenericInput);
