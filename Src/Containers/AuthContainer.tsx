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

import {AuthForm} from '../Forms/AuthForm';

interface Props {}

export const AuthContainer: React.FC<Props> = ({}) => {
   return <AuthForm />;
};
