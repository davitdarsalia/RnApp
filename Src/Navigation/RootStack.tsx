import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackScreenList} from './Types';
import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import MainScreen from '../Screens/MainScreen';
import AllHotelsScreen from '../Screens/AllHotelsScreen';

import {colors} from '../consts/colors';
import HotelDetailScreen from '../Screens/HotelDetailScreen';

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
            <Screen
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
            <Screen name="loginScreen" component={LoginScreen} />
            <Screen name="registerScreen" component={RegisterScreen} />
        </Navigator>
    );
};

export default RootStack;
