import React from 'react';
import {
   View,
   Button,
   Text,
   TextInput,
   FlatList,
   TouchableOpacity,
   StyleSheet,
   StyleProp,
   ViewStyle,
} from 'react-native';
import {BlurView} from '@react-native-community/blur';

import CardIcon from '../../../assets/icons/CardIcon.svg';

import {styles} from './style';

interface Props {
   children: Element;
   style?: StyleProp<ViewStyle>;
}

export const Paper: React.FC<Props> = ({children, style}) => {
   return (
      <BlurView blurType="light" style={[styles.paperWrapper, style]}>
         {children}
      </BlurView>
   );
};
