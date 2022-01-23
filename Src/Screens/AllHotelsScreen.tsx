import React, {useEffect} from 'react';
import {View} from 'react-native';
import {UseCustomDispatch} from '../Store/Hooks/CustomDispatch';

import AllHotelsContainer from '../containers/allHotelsContainer/allHotelsContainer';
import {FetchHotels} from '../Store/Actions/FeedActions';

import globalStyles from '../../styles';

interface Props {}

const AllHotelsScreen: React.FC<Props> = ({}) => {
    const onHotelItem = () => {};

    const dispatch = UseCustomDispatch();

    useEffect(() => {
        dispatch(FetchHotels());
    }, []);

    return (
        <View style={globalStyles.mainScreen}>
            <AllHotelsContainer onHotelItem={onHotelItem} />
        </View>
    );
};

export default AllHotelsScreen;
