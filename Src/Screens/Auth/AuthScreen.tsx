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
import {AuthContainer} from '../../Containers/AuthContainer';

interface Props {}

export const AuthScreen: React.FC<Props> = ({}) => {
   return (
      <SafeAreaView
         style={{
            flex: 1,
            backgroundColor: '#fff',
         }}>
         <AuthContainer />
      </SafeAreaView>
   );
};
