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
} from 'react-native';

import {styles} from './style';

interface Props {
   children: Element;
   onPress: () => void;
   onLongPress?: () => void;
}

export const GenericWidget: React.FC<Props> = ({
   children,
   onPress = () => {},
   onLongPress = () => {},
}) => {
   return (
      <TouchableOpacity onPress={onPress} onLongPress={onLongPress}>
         <>
            <BlurView style={styles.widgetWrapper} blurType="light">
               {children}
            </BlurView>
         </>
      </TouchableOpacity>
   );
};
