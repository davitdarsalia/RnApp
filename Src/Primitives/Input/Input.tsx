import React from 'react';
import {
   View,
   Button,
   Text,
   TextInput,
   FlatList,
   TouchableOpacity,
   StyleSheet,
   ViewStyle,
   StyleProp,
} from 'react-native';

import {inputStyles} from './style';

interface Props {
   placeholder: string;
   style?: StyleProp<ViewStyle>;
   value: string;
   onChangeText: (val: string) => void;
   maxLength: number;
}

export const Input: React.FC<Props> = ({
   style,
   placeholder = '',
   value,
   maxLength,
   onChangeText,
}) => {
   return (
      <>
         <TextInput
            value={value}
            placeholder={placeholder}
            maxLength={maxLength}
            style={[inputStyles.inputWrapper, style]}
            onChangeText={onChangeText}
         />
      </>
   );
};
