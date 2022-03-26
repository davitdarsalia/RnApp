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
import {ModalComponent} from '../../Components/Modal/Modal';

import {AuthForm} from '../../Forms/AuthForm';

interface Props {
   visible: boolean;
   onSwipeUp: () => void;
   onSwipeDown: () => void;
   onSubmit: () => void;
}

export const AuthContainer: React.FC<Props> = ({
   visible,
   onSwipeUp = () => {},
   onSwipeDown = () => {},
   onSubmit = () => {},
}) => {
   return (
      <SafeAreaView
         style={{
            flex: 1,
         }}>
         <ModalComponent
            visible={visible}
            onSwipeUp={onSwipeUp}
            onSwipeDown={onSwipeDown}>
            <AuthForm onSubmit={onSubmit} />
         </ModalComponent>
      </SafeAreaView>
   );
};
function useState<T>(arg0: boolean): [any, any] {
   throw new Error('Function not implemented.');
}
