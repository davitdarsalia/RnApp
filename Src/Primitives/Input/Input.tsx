import React from 'react';
import {
   View,
   Button,
   Text,
   TextInput,
   FlatList,
   TouchableOpacity,
   StyleSheet,
} from 'react-native';

import {inputStyles} from './style';

interface Props {
   placeholder: string;

   value: string;
   onChangeText: (val: string) => void;
   maxLength: number;
}

export const Input: React.FC<Props> = ({
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
            style={inputStyles.inputWrapper}
            onChangeText={onChangeText}
         />
      </>
   );
};
