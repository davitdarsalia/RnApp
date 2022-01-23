import React from 'react';
import {View} from 'react-native';

import {Provider} from 'react-redux';
import {setupStore} from './Src/Store';

import RootStack from './Src/Navigation/Stacks/RootStack';
import {NavigationContainer} from '@react-navigation/native';

import globalStyles from './styles';

const store = setupStore();

const App = () => {
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

export default App;
