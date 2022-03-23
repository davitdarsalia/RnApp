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

import {MyLoansContainer} from '../../Containers/Main/MyLoansContainer';

interface Props {}

export const MyLoans: React.FC<Props> = ({}) => {
   return (
      <SafeAreaView>
         <MyLoansContainer />
      </SafeAreaView>
   );
};
