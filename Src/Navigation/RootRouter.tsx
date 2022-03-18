import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {RouteList} from './types';
import AuthStack from './AuthStack/AuthStack';

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
         </Navigator>
      </NavigationContainer>
   );
};

export default Routes;
