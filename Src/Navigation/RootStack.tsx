import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackScreenList} from './Types';

import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';

import AllHotelsScreen from '../Screens/AllHotelsScreen';
import HotelDetailScreen from '../Screens/HotelDetailScreen';
import RegistrationScreen from '../Screens/RegistrationScreen';

import {colors} from '../consts/colors';
import MainScreen from '../Screens/MainScreen';
import {Hotel} from '../Screens/Hotel';
import AllHotelsContainer from '../containers/allHotelsContainer/allHotelsContainer';

const Stack = createStackNavigator<RootStackScreenList>();

interface Props {}

const RootStack: React.FC<Props> = () => {
    const {Navigator, Screen} = Stack;

    return (
        <Navigator initialRouteName="mainScreen">
            {/* <Screen name="authLoading" component={} /> */}
            <Screen
                name="hotel"
                component={Hotel}
                options={{
                    title: 'Hotel Midnight',
                    headerTintColor: colors.main,
                    headerStyle: {
                        backgroundColor: colors.background,
                    },
                }}
            />
            {/* <Screen
                name="allHotelsScreen"
                component={AllHotelsScreen}
                options={{
                    title: 'Hotel Midnight',
                    headerTintColor: colors.main,
                    headerStyle: {
                        backgroundColor: colors.background,
                    },
                }}
            /> */}
            {/* <Screen
                name="allHotelsScreen"
                component={AllHotelsScreen}
                options={{
                    title: 'All Hotels',
                    headerTintColor: colors.main,
                    headerBackTitle: ' ',
                    headerStyle: {
                        backgroundColor: colors.background,
                    },
                }}
            />
            <Screen
                name="hotelDetailScreen"
                component={HotelDetailScreen}
                options={{
                    title: ' ',
                    headerTransparent: true,
                    headerTintColor: colors.main,
                    headerBackTitle: ' ',
                }}
            />
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
            <Screen name="registerScreen" component={RegisterScreen} /> */}
        </Navigator>
    );
};

export default RootStack;
