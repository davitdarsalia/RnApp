import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {AuthScreenList} from '../types';
import {AuthScreen} from '../../Screens/Auth/AuthScreen';

const AuthStackNavigator = createStackNavigator<AuthScreenList>();

const AuthStack: React.FC = () => {
   const {Navigator, Screen} = AuthStackNavigator;

   return (
      <Navigator
         screenOptions={{
            gestureEnabled: true,
            headerShown: false,
         }}
         initialRouteName="AuthScreen">
         <Screen name="AuthScreen" component={AuthScreen} />
      </Navigator>
   );
};

export default AuthStack;
