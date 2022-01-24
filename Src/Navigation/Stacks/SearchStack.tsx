import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HotelDetailScreen from '../../Screens/HotelDetailScreen';

const Stack = createStackNavigator();

const SearchStack = () => {
    const {Navigator, Screen} = Stack;

    return <Navigator></Navigator>;
};

export default SearchStack;
