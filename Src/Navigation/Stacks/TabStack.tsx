import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabStackScreenList} from '../Types';
import FeedStack from './FeedStack';
import MapStack from './MapStack';
import AuthScreen from '../../Screens/Auth';

const Tab = createBottomTabNavigator<TabStackScreenList>();

const TabStack = () => {
    const {Navigator, Screen} = Tab;
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Screen name="Feed" component={FeedStack} />

            {/* <Screen
                name="registrationScreen"
                component={RegistrationScreen}
                options={{
                    title: 'Registration / Login ',
                    headerTransparent: true,
                    headerTintColor: colors.main,
                    headerBackTitle: ' ',
                }}
            /> */}
            <Screen name="Map" component={MapStack} />
            <Screen name="Auth" component={AuthScreen} />
        </Navigator>
    );
};

export default TabStack;
