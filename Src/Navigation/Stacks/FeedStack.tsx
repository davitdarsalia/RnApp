import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {FeedStackScreenList, RootStackScreenList} from '../Types';

import MainScreen from '../../Screens/MainScreen';
import AllHotelsScreen from '../../Screens/AllHotelsScreen';
import HotelDetailScreen from '../../Screens/HotelDetailScreen';

import {colors} from '../../consts/colors';
import RegistrationScreen from '../../Screens/RegistrationScreen';

const Stack = createStackNavigator<FeedStackScreenList>();

interface Props {}

const FeedStack: React.FC<Props> = () => {
    const {Navigator, Screen} = Stack;

    return (
        <Navigator initialRouteName="mainScreen">
            <Screen
                name="reg"
                component={RegistrationScreen}
                options={{
                    title: 'Hotel Midnight',
                    headerTintColor: colors.main,
                    headerStyle: {
                        backgroundColor: colors.background,
                    },
                }}
            />
            <Screen
                name="mainScreen"
                component={MainScreen}
                options={{
                    title: 'Feed',
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
        </Navigator>
    );
};

export default FeedStack;
