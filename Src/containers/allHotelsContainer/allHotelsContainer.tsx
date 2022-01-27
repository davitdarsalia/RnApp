import {LinearGradient} from 'expo-linear-gradient';
import React, {useCallback, useEffect} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import HotelItem from '../../components/hotelItem/index';
import {UseTypeSelector} from '../../Store/Hooks/CustomSelector';

import st from './style';

interface Props {
    onHotelItem: () => void;
}

const AllHotelsContainer: React.FC<Props> = ({onHotelItem}) => {
    const hotelList = UseTypeSelector((state) => state.feedReducer.hotels);
    const loading = UseTypeSelector((state) => state.feedReducer.loading);

    const {allHotels} = hotelList;

    const renderItem = useCallback(({item}) => {
        const renderCondition = loading ? (
            <ActivityIndicator color="#000" />
        ) : (
            <HotelItem item={item} onHotelItem={onHotelItem} />
        );

        return renderCondition;
    }, []);

    return (
        <View style={st.container}>
            {}
            <FlatList
                data={allHotels}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => `${item.id} ${Date.now()}`}
                renderItem={renderItem}
            />
        </View>
    );
};

export default AllHotelsContainer;
