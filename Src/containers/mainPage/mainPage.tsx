import React, {useCallback, useEffect} from 'react';

import {View, Text, FlatList, TouchableOpacity} from 'react-native';

import {HotelItem} from '../../components';
import {FetchHotels} from '../../Store/Actions/FeedActions';
import {UseCustomDispatch} from '../../Store/Hooks/CustomDispatch';

import {LinearGradient} from 'expo-linear-gradient';

import st from './style';
import {colors} from '../../consts/colors';
import {UseTypeSelector} from '../../Store/Hooks/CustomSelector';

interface Props {
    onSeeAll: () => void;
    onHotelItem: () => void;
}

const MainPageContainer: React.FC<Props> = ({onSeeAll, onHotelItem}) => {
    const dispatch = UseCustomDispatch();
    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        dispatch(FetchHotels(signal));

        return () => {
            controller.abort();
        };
    }, []);

    const allHotels = UseTypeSelector(
        (state) => state.feedReducer.hotels.allHotels,
    );

    const renderItem = useCallback(({item}) => {
        return <HotelItem item={item} onHotelItem={onHotelItem} />;
    }, []);

    return (
        <View style={st.container}>
            <LinearGradient
                colors={[colors.gradientDark, colors.gradientLight]}
                style={st.linearGradient}>
                {/* <View style={st.labelContainer}>
                    <Text style={st.label}>Currently available hotels: </Text>
                    <TouchableOpacity onPress={onSeeAll}>
                        <Text style={st.buttonLabel}>View Map</Text>
                    </TouchableOpacity>
                </View> */}
                <View style={st.itemsContainer}>
                    <FlatList
                        data={allHotels}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={renderItem}
                    />
                </View>
            </LinearGradient>
        </View>
    );
};

export default MainPageContainer;
