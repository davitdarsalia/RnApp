import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import UserInactivity from "react-native-user-inactivity";

import { AuthScreen } from "../Screens/AuthScreen";
import { MainStack } from "./MainStack";

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  const { Screen, Navigator } = RootStack;

  return (
    <NavigationContainer>
      <UserInactivity onAction={(isActive: boolean) => {}}>
        <Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="authStack"
        >
          <Screen name="authStack" component={AuthScreen} />
          <Screen name="mainStack" component={MainStack} />
        </Navigator>
      </UserInactivity>
    </NavigationContainer>
  );
};
