import React from 'react';
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
import {BlurView} from '@react-native-community/blur';

import GestureRecognizer from 'react-native-swipe-gestures';

import Modal from 'react-native-modal';

import {styles} from './style';

interface Props {
   children: Element;
   visible: boolean;
   onSwipeLeft: () => void;
   onSwipeRight: () => void;
}

export const BlurGestureModal: React.FC<Props> = ({
   children,
   visible,
   onSwipeLeft = () => {},
   onSwipeRight = () => {},
}) => {
   return (
      <GestureRecognizer
         style={styles.outerWrapper}
         onSwipeLeft={onSwipeLeft}
         onSwipeRight={onSwipeRight}>
         <Modal
            hasBackdrop={false}
            isVisible={visible}
            animationIn="slideInRight"
            animationOut="slideOutRight">
            <BlurView blurType="light" style={styles.innerWrapper}>
               {children}
            </BlurView>
         </Modal>
      </GestureRecognizer>
   );
};
