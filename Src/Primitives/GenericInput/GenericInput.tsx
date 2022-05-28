import React, { RefObject, createRef } from "react";
import { TextInput, View, Text } from "react-native";

import { ColorList } from "../../Constants/Colors";
import { autoCapitalizeOptions } from "../../Constants/Enums";

import { GenericInputProps } from "../Types";

import { InputStyles } from "./style";

const GenericInput: React.FC<GenericInputProps<any>> = ({
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
        style={[
          touched && errorText === ""
            ? InputStyles.textInputFocused
            : InputStyles.textInputError,
          !touched && InputStyles.textInput,
          style,
        ]}
        onChangeText={onChangeText}
        onBlur={onBlur}
        onFocus={onFocus}
        onSubmitEditing={onSubmitEditing}
        accessible={true}
        accessibilityLabel={accessibilityLabel}
        testID={accessibilityLabel}
        ref={inputRef}
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
