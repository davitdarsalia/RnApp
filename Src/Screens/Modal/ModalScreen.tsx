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

import {ModalContainer} from '../../Containers/Modal/ModalContainer';

interface Props {}

export const ModalScreen: React.FC<Props> = ({}) => {
   return (
      <>
         <ModalContainer />
      </>
   );
};
