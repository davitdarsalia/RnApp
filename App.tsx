import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';
import RootStack from './Src/Navigation/RootStack';
import globalStyles from './styles';

export default function App() {
    return (
        <NavigationContainer>
            <View style={globalStyles.screen}>
                <RootStack />
            </View>
        </NavigationContainer>
    );
}
