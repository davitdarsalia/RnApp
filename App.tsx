import React from 'react';
import {View} from 'react-native';

import {Provider} from 'react-redux';
import {store} from './Src/Store';

import {NavigationContainer} from '@react-navigation/native';
import RootStack from './Src/Navigation/RootStack';

import globalStyles from './styles';

export const App = () => {
    return (
        <NavigationContainer>
            <Provider store={store}>
                <View style={globalStyles.screen}>
                    <RootStack />
                </View>
            </Provider>
        </NavigationContainer>
    );
};
