import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackScreenList} from './Types';
import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import MainScreen from '../Screens/MainScreen';

import {colors} from '../consts/colors';

const Stack = createStackNavigator<RootStackScreenList>();

interface Props {}

const RootStack: React.FC<Props> = () => {
    const {Navigator, Screen} = Stack;

    return (
        <Navigator initialRouteName="mainScreen">
            {/* <Screen name="authLoading" component={} /> */}
            <Screen
                name="mainScreen"
                component={MainScreen}
                options={{
                    title: 'Hotel Midnight',
                    headerTintColor: colors.main,
                    headerStyle: {
                        backgroundColor: colors.background,
                    },
                }}
            />
            <Screen name="loginScreen" component={LoginScreen} />
            <Screen name="registerScreen" component={RegisterScreen} />
        </Navigator>
    );
};

export default RootStack;
