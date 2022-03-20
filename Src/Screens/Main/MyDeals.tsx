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

interface Props {}

export const MyDeals: React.FC<Props> = ({}) => {
   return (
      <View
         style={{
            backgroundColor: 'red',
            flex: 1,
         }}>
         <Text>Deals</Text>
      </View>
   );
};
