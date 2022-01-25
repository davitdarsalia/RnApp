import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabStackScreenList} from '../Types';

import FeedStack from './FeedStack';
import MapStack from './MapStack';
import AuthScreen from '../../Screens/Auth';

import {TouchableOpacity} from 'react-native-gesture-handler';

import {MaterialIcons} from '@expo/vector-icons';
import {FontAwesome} from '@expo/vector-icons';
import {Entypo} from '@expo/vector-icons';

const Tab = createBottomTabNavigator<TabStackScreenList>();

const TabStack = () => {
    const {Navigator, Screen} = Tab;
    return (
        <Navigator
            screenOptions={({route}) => ({
                headerShown: false,
                tabBarIcon: ({focused, color, size}) => {
                    let icon;

                    if (route.name === 'Feed') {
                        focused
                            ? (icon = (
                                  <MaterialIcons
                                      name="dynamic-feed"
                                      size={36}
                                      color="teal"
                                  />
                              ))
                            : (icon = (
                                  <MaterialIcons
                                      name="dynamic-feed"
                                      size={25}
                                      color="black"
                                  />
                              ));
                    } else if (route.name === 'Map') {
                        focused
                            ? (icon = (
                                  <FontAwesome
                                      name="map"
                                      size={36}
                                      color="teal"
                                  />
                              ))
                            : (icon = (
                                  <FontAwesome
                                      name="map"
                                      size={25}
                                      color="black"
                                  />
                              ));
                    } else if (route.name === 'Auth') {
                        focused
                            ? (icon = (
                                  <Entypo name="users" size={36} color="teal" />
                              ))
                            : (icon = (
                                  <Entypo
                                      name="users"
                                      size={25}
                                      color="black"
                                  />
                              ));
                    }

                    return <TouchableOpacity>{icon}</TouchableOpacity>;
                },
            })}>
            <Screen name="Feed" component={FeedStack} />

            <Screen name="Map" component={MapStack} />
            <Screen name="Auth" component={AuthScreen} />
        </Navigator>
    );
};

export default TabStack;
