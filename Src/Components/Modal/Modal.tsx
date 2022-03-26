import {BlurView} from '@react-native-community/blur';
import React, {useState} from 'react';
import {
   View,
   Button,
   Text,
   TextInput,
   FlatList,
   TouchableOpacity,
   StyleSheet,
   ViewStyle,
} from 'react-native';

import Modal from 'react-native-modal';
import GestureRecognizer from 'react-native-swipe-gestures';

import {styles} from './style';

interface Props {
   style?: ViewStyle;
   visible: boolean;
   children: Element;
   onSwipeDown: () => void;
   onSwipe?: () => void;
   onSwipeUp?: () => void;
}

export const ModalComponent: React.FC<Props> = ({
   style,
   visible,
   children,
   onSwipe = () => {},
   onSwipeUp = () => {},
   onSwipeDown = () => {},
}) => {
   return (
      <GestureRecognizer
         style={styles.gestureWrapper}
         onSwipeUp={onSwipeUp}
         onSwipeDown={onSwipeDown}
         onSwipe={onSwipe}>
         <View>
            <Modal
               backdropColor="transparent"
               animationIn="bounceInUp"
               isVisible={visible}>
               <BlurView
                  blurType="light"
                  style={{
                     marginTop: 10,
                     height: '70%',
                     width: '111%',
                     position: 'absolute',
                     bottom: '-10%',
                     left: '-5.5%',
                     alignSelf: 'flex-start',
                     borderRadius: 30,
                     overflow: 'hidden',
                     alignItems: 'center',
                     padding: '5%',
                     ...style,
                  }}>
                  {children}
               </BlurView>
            </Modal>
         </View>
      </GestureRecognizer>
   );
};
