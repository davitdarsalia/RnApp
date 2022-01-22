import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackScreenList} from '../Types';

import LoginScreen from '../../Screens/LoginScreen';
import RegisterScreen from '../../Screens/RegisterScreen';
import RegistrationScreen from '../../Screens/RegistrationScreen';

import {colors} from '../../consts/colors';
import FeedStack from './FeedStack';

const Stack = createStackNavigator<RootStackScreenList>();

interface Props {}

const RootStack: React.FC<Props> = () => {
    const {Navigator, Screen} = Stack;

    return (
        <Navigator initialRouteName="feedStack">
            {/* <Screen name="authLoading" component={} /> */}
            <Screen name="feedStack" component={FeedStack} />
            <Screen
                name="registrationScreen"
                component={RegistrationScreen}
                options={{
                    title: 'Registration / Login ',
                    headerTransparent: true,
                    headerTintColor: colors.main,
                    headerBackTitle: ' ',
                }}
            />
            <Screen name="loginScreen" component={LoginScreen} />
            <Screen name="registerScreen" component={RegisterScreen} />
        </Navigator>
    );
};

export default RootStack;
