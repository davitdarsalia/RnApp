import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackScreenList} from '../Types';

import TabStack from './TabStack';

const Stack = createStackNavigator<RootStackScreenList>();

interface Props {}

const RootStack: React.FC<Props> = () => {
    const {Navigator, Screen} = Stack;

    return (
        <Navigator
            initialRouteName="tabStack"
            screenOptions={{
                headerShown: false,
            }}>
            <Screen name="tabStack" component={TabStack} />
        </Navigator>
    );
};

export default RootStack;
