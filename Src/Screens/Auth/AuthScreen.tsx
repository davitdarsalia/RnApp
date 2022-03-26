import {useNavigation} from '@react-navigation/core';
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
   PushNotificationIOS,
} from 'react-native';

import {AuthContainer} from '../../Containers/Auth/AuthContainer';
import {RootStackGenericProp} from '../../Navigation/types';

interface Props {}

export const AuthScreen: React.FC<Props> = ({}) => {
   const [visible, setVisible] = useState<boolean>(true);

   const {push} = useNavigation<RootStackGenericProp<'MainStack'>>();

   const onSwipeUp = () => {
      setVisible(true);
   };
   const onSwipeDown = () => {
      setVisible(false);
   };

   const onSubmit = () => {
      setVisible(false);
      push('MainStack');
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
