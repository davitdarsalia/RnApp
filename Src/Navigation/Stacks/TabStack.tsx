import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabStackScreenList} from '../Types';

import FeedStack from './FeedStack';
import MapStack from './MapStack';
import AuthScreen from '../../Screens/Auth';

import {TouchableOpacity} from 'react-native-gesture-handler';

import {MaterialIcons} from '@expo/vector-icons';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {FontAwesome} from '@expo/vector-icons';
import {colors} from '../../consts/colors';
import AllHotelsScreen from '../../Screens/AllHotelsScreen';

const Tab = createBottomTabNavigator<TabStackScreenList>();

const TabStack = () => {
    const {Navigator, Screen} = Tab;
    return (
        <Navigator
            screenOptions={({route}) => ({
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: colors.gradientLight,
                },

                tabBarLabelStyle: {
                    color: 'rgba(0,0,0,.7)',
                    fontWeight: '500',
                    fontSize: 10,
                },
                tabBarIcon: ({focused}) => {
                    let icon;

                    if (route.name === 'Feed') {
                        focused
                            ? (icon = (
                                  <MaterialIcons
                                      name="dynamic-feed"
                                      size={36}
                                      color={colors.black}
                                  />
                              ))
                            : (icon = (
                                  <MaterialIcons
                                      name="dynamic-feed"
                                      size={24}
                                      color="black"
                                  />
                              ));
                    } else if (route.name === 'Search') {
                        focused
                            ? (icon = (
                                  <MaterialCommunityIcons
                                      name="cloud-search"
                                      size={36}
                                      color={colors.black}
                                  />
                              ))
                            : (icon = (
                                  <MaterialCommunityIcons
                                      name="cloud-search"
                                      size={25}
                                      color="black"
                                  />
                              ));
                    } else if (route.name === 'Map') {
                        focused
                            ? (icon = (
                                  <FontAwesome
                                      name="map"
                                      size={34}
                                      color={colors.black}
                                  />
                              ))
                            : (icon = (
                                  <FontAwesome
                                      name="map"
                                      size={25}
                                      color="black"
                                  />
                              ));
                    }

                    return <TouchableOpacity>{icon}</TouchableOpacity>;
                },
            })}>
            <Screen name="Feed" component={FeedStack} />

            <Screen
                name="Search"
                component={AllHotelsScreen}
                options={{
                    headerShown: true,
                    headerTitle: 'Search Hotel',
                    headerTintColor: colors.main,
                    headerStyle: {
                        backgroundColor: colors.gradientDark,
                    },
                }}
            />
            <Screen name="Map" component={MapStack} />
        </Navigator>
    );
};

export default TabStack;
