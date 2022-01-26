import React from 'react';
import {
    View,
    Button,
    Text,
    TextInput,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import {MapContainer} from '../containers/mapContainer/mapContainer';
import {UseTypeSelector} from '../Store/Hooks/CustomSelector';

interface Props {}

export const MapScreen: React.FC<Props> = ({}) => {
    return (
        <View>
            <MapContainer />
        </View>
    );
};
