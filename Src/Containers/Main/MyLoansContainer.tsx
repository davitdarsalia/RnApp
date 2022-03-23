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
import {ScrollView} from 'react-native-gesture-handler';
import {BlurButton} from '../../Components/BlurButton/BlurButton';

import {Paper} from '../../Components/Paper/Paper';
import {BlurButtonVariant} from '../../Constants/Enums';

import {styles} from '../style';

interface Props {}

export const MyLoansContainer: React.FC<Props> = ({}) => {
   return (
      <ScrollView style={styles.ScrollViewSt}>
         <Paper>
            <Text style={styles.MainHeader}>Universal Account</Text>
            <Text style={styles.CurrencyAmount}>13.99$ </Text>
         </Paper>

         <BlurButton btnLabel="D" variant={BlurButtonVariant.large} />
      </ScrollView>
   );
};
