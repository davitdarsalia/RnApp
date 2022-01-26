import React from 'react';
import {View, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

import MapView, {Marker} from 'react-native-maps';
import {UseTypeSelector} from '../../Store/Hooks/CustomSelector';
import {defCoords} from '../../Types/GlobalInterfaces';

interface Props {}

export const MapContainer: React.FC<Props> = ({}) => {
    const initialLocation: defCoords = {
        latitude: 41.716667,
        longitude: 44.783333,
    };

    const coords = UseTypeSelector(
        (state) => state.feedReducer.hotels.allHotels,
    );

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
                {coords.map((coordinate) => {
                    const coordObj = {
                        latitude: Number(coordinate.latitude),
                        longitude: Number(coordinate.longitude),
                    };
                    return (
                        <Marker
                            key={`${coordinate.id} ${
                                Math.random() * Date.now()
                            }`}
                            coordinate={coordObj}
                            title={coordinate.name}
                            description={`${coordinate.description}`}
                            pinColor="black"
                        />
                    );
                })}
            </MapView>
        </View>
    );
};
