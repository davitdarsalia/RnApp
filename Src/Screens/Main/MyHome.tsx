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

import {ModalComponent} from '../../Components/Modal/Modal';

interface Props {}

export const MyHome: React.FC<Props> = ({}) => {
   const [visible, setVisible] = useState<boolean>(true);

   const onSwipeUp = () => {
      setVisible(true);
   };
   const onSwipeDown = () => {
      setVisible(false);
   };

   return (
      <SafeAreaView
         style={{
            flex: 1,
         }}>
         <ModalComponent
            visible={visible}
            onSwipeDown={onSwipeDown}
            onSwipeUp={onSwipeUp}>
            <Text>DDD</Text>
         </ModalComponent>
      </SafeAreaView>
   );
};
