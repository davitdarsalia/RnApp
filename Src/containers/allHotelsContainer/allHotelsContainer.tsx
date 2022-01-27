import React, {useCallback, useMemo, useState} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

import CustomInput from '../../components/customInput/CustomInput';
import HotelItem from '../../components/hotelItem/index';

import {UseTypeSelector} from '../../Store/Hooks/CustomSelector';

import st from './style';

interface Props {
    onHotelItem: () => void;
}

const AllHotelsContainer: React.FC<Props> = ({onHotelItem}) => {
    const hotelList = UseTypeSelector((state) => state.feedReducer.hotels);
    const loading = UseTypeSelector((state) => state.feedReducer.loading);

    const [hotelName, setHotelName] = useState<string>('rad');

    const {allHotels} = hotelList;

    const renderItem = useCallback(({item}) => {
        const renderCondition = loading ? (
            <ActivityIndicator color="#000" />
        ) : (
            <HotelItem item={item} onHotelItem={onHotelItem} />
        );

        return renderCondition;
    }, []);

    const dat = allHotels.map((hotel) => hotel.name === hotelName);

    console.log(dat);

    return (
        <View style={st.container}>
            <CustomInput
                onChange={(text: string) => setHotelName(text)}
                isPasswordInput={false}
                label="Search Hotel"
                value={hotelName}
            />
            {/* {custom} */}

            <FlatList
                data={allHotels}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => `${item.id} ${Date.now()}`}
                renderItem={renderItem}
            />
        </View>
    );
};

export default React.memo(AllHotelsContainer);
