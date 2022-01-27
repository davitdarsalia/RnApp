import React from 'react';
import {View} from 'react-native';
import {MapContainer} from '../containers/mapContainer/mapContainer';

interface Props {}

export const MapScreen: React.FC<Props> = ({}) => {
    return (
        <View>
            <MapContainer />
        </View>
    );
};
