import React, {useState} from 'react';
import {
   View,
   Button,
   Text,
   TextInput,
   FlatList,
   TouchableOpacity,
   StyleSheet,
   SafeAreaView,
} from 'react-native';

import {AuthContainer} from '../../Containers/Auth/AuthContainer';

interface Props {}

export const AuthScreen: React.FC<Props> = ({}) => {
   const [visible, setVisible] = useState<boolean>(true);

   const onSwipeUp = () => {
      setVisible(true);
   };
   const onSwipeDown = () => {
      setVisible(false);
   };

   const onSubmit = () => {
      console.log('dd');
      setVisible(false);
   };

   return (
      <SafeAreaView
         style={{
            flex: 1,
            backgroundColor: 'green',
         }}>
         <AuthContainer
            visible={visible}
            onSwipeUp={onSwipeUp}
            onSwipeDown={onSwipeDown}
            onSubmit={onSubmit}
         />
      </SafeAreaView>
   );
};
