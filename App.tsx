import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import RootStack from './Src/Navigation/RootStack';

export default function App() {
    return (
        <View style={styles.container}>
            <RootStack />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
