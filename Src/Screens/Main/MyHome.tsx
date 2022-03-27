import React, {useEffect, useState} from 'react';
import {
   View,
   Button,
   Text,
   TextInput,
   FlatList,
   TouchableOpacity,
   StyleSheet,
   SafeAreaView,
   ImageBackground,
} from 'react-native';
import {BlurGestureModal} from '../../Components/BlurGestureModal/BlurGestureModal';

import {BlurModalForm} from '../../Forms/BlurModalForm';

interface Props {}

export const MyHome: React.FC<Props> = ({}) => {
   const [visible, setVisible] = useState<boolean>(false);

   useEffect(() => {
      setVisible(false);
   }, []);

   const onSwipeLeft = () => {
      setVisible(true);
   };
   const onSwipeRight = () => {
      setVisible(false);
   };

   return (
      <SafeAreaView
         style={{
            flex: 1,
         }}>
         <BlurGestureModal
            visible={visible}
            onSwipeLeft={onSwipeLeft}
            onSwipeRight={onSwipeRight}>
            <BlurModalForm />
         </BlurGestureModal>
      </SafeAreaView>
   );
};
