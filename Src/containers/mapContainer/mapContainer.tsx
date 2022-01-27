import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';

import MapView, {Marker} from 'react-native-maps';
import {colors} from '../../consts/colors';
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

    const {navigate} = useNavigation();

    const onMarkerPress = () => {
        navigate('hotelDetailScreen');
    };

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
                            zIndex={31}
                            key={`${coordinate.id} ${
                                Math.random() * Date.now()
                            }`}
                            coordinate={coordObj}
                            title={coordinate.name}
                            description={`${coordinate.price}`}
                            pinColor={colors.main}
                            tappable
                            onPress={() => console.log(coordinate.name)}
                        />
                    );
                })}
            </MapView>
        </View>
    );
};
