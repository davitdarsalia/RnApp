import React, {useState} from 'react';
import {
   View,
   Button,
   Text,
   TextInput,
   FlatList,
   TouchableOpacity,
   StyleSheet,
} from 'react-native';

import Modal from 'react-native-modal';
import GestureRecognizer from 'react-native-swipe-gestures';

interface Props {}

export const ModalComponent: React.FC<Props> = ({}) => {
   const [visible, setVisible] = useState<boolean>(true);
   return (
      <GestureRecognizer
         style={{
            flex: 1,
         }}
         onSwipeUp={() => setVisible(true)}
         onSwipeDown={() => setVisible(false)}>
         <View
            style={{
               paddingBottom: 100,
            }}>
            <Modal isVisible={visible}>
               <View
                  style={{
                     backgroundColor: 'white',
                     height: '70%',
                     width: '111%',
                     position: 'absolute',
                     bottom: '-10%',
                     left: '-5.5%',
                     alignSelf: 'flex-start',
                     borderRadius: 30,
                  }}></View>
            </Modal>
         </View>
      </GestureRecognizer>
   );
};
