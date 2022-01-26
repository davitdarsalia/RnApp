import React from 'react';
import {View, Text} from 'react-native';

import MapView, {Marker} from 'react-native-maps';
import {UseTypeSelector} from '../../Store/Hooks/CustomSelector';
import {defCoords} from '../../Types/GlobalInterfaces';

interface Props {}

export const MapContainer: React.FC<Props> = ({}) => {
    const initialLocation: defCoords = {
        latitude: 41.716667,
        longitude: 44.783333,
    };

    const defs: defCoords = {
        latitude: 41.716667,
        longitude: 44.783333,
    };

    const coordinates: Array<defCoords> = [];

    const coords = UseTypeSelector(
        (state) => state.feedReducer.hotels.allHotels,
    );

    // for(let i = 0 ; i < coords.length; i++ {

    // })

    return (
        <View>
            <MapView
                style={{width: '100%', height: '100%'}}
                initialRegion={{
                    latitude: initialLocation.latitude,
                    longitude: initialLocation.longitude,
                    latitudeDelta: 0.1922,
                    longitudeDelta: 0.1421,
                }}>
                <Marker
                    key={`${Math.random() * 33}`}
                    coordinate={defs}
                    title={'Glovo'}
                    description={'Glovo Stuff'}
                    pinColor="black"
                />
            </MapView>
        </View>
    );
};
