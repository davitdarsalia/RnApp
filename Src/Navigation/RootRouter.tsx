import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import UserInactivity from "react-native-user-inactivity";
import { AuthScreen } from "../Screens/AuthScreen";

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  const { Screen, Navigator } = RootStack;

  return (
    <NavigationContainer>
      <UserInactivity onAction={(isActive: boolean) => {}}>
        <Navigator
          defaultScreenOptions={{
            headerShown: false,
          }}
        >
          <Screen
            options={{ headerShown: false }}
            name="auth"
            component={AuthScreen}
          />
        </Navigator>
      </UserInactivity>
    </NavigationContainer>
  );
};
