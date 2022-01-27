import {useRoute} from '@react-navigation/core';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {MapScreen} from '../../Screens/MapScreen';

const Stack = createStackNavigator();

const MapStack = () => {
    const {Navigator, Screen} = Stack;

    const {params} = useRoute();
    console.log(params);

    return (
        <Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Screen name="map" component={MapScreen} />
        </Navigator>
    );
};

export default MapStack;
