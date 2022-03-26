import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {RouteList} from './types';
import AuthStack from './AuthStack/AuthStack';
import MainStack from './MainStack/MainStack';

const RootStack = createStackNavigator<RouteList>();

const Routes: React.FC = () => {
   const {Navigator, Screen} = RootStack;

   return (
      <NavigationContainer>
         <Navigator
            screenOptions={{
               gestureEnabled: true,
               headerShown: false,
            }}
            initialRouteName="AuthStack">
            <Screen name="AuthStack" component={AuthStack} />
            <Screen name="MainStack" component={MainStack} />
         </Navigator>
      </NavigationContainer>
   );
};

export default Routes;
