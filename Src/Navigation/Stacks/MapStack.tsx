import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {MapScreen} from '../../Screens/MapScreen';

const Stack = createStackNavigator();

const MapStack = () => {
    const {Navigator, Screen} = Stack;

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
