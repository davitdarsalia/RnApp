import React from 'react';
import {View} from 'react-native';

import AllHotelsContainer from '../containers/allHotelsContainer/allHotelsContainer';

import globalStyles from '../../styles';

interface Props {}

const AllHotelsScreen: React.FC<Props> = ({}) => {
    const onHotelItem = () => {};

    return (
        <View style={globalStyles.mainScreen}>
            <AllHotelsContainer onHotelItem={onHotelItem} />
        </View>
    );
};

export default AllHotelsScreen;
