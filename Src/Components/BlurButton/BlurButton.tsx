import {BlurView} from '@react-native-community/blur';
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
import {BlurButtonVariant} from '../../Constants/Enums';

import {styles} from './style';

interface Props {
   children?: Element;
   wrapperStyle?: StyleProp<ViewStyle>;
   blurStyle?: StyleProp<ViewStyle>;
   variant: string;
   btnLabel: string;
}

export const BlurButton: React.FC<Props> = ({
   wrapperStyle,
   blurStyle,
   variant,
   children,
   btnLabel,
}) => {
   let wrapper: StyleProp<ViewStyle>;
   switch (variant) {
      case BlurButtonVariant.small:
         wrapper = styles.smallWrapper;
      case BlurButtonVariant.medium:
         wrapper = styles.mediumWrapper;
      case BlurButtonVariant.large:
         wrapper = styles.largeWrapper;
   }

   return (
      <TouchableOpacity>
         <BlurView blurType="light" style={[wrapper, wrapperStyle, blurStyle]}>
            {children ? (
               children
            ) : (
               <Text style={styles.labelSt}>{btnLabel}</Text>
            )}
         </BlurView>
      </TouchableOpacity>
   );
};
