import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackScreenList} from './Types';
import {LoginScreen} from '../Store/LoginScreen';
import {RegisterScreen} from '../Store/RegisterScreen';

const Stack = createStackNavigator<RootStackScreenList>();

interface Props {}

const RootStack: React.FC<Props> = () => {
    const {Navigator, Screen} = Stack;

    return (
        <Navigator initialRouteName="loginScreen">
            {/* <Screen name="authLoading" component={} /> */}
            <Screen name="loginScreen" component={LoginScreen} />
            <Screen name="registerScreen" component={RegisterScreen} />
        </Navigator>
    );
};

export default RootStack;
