import React from 'react';
import {View, Text} from 'react-native';
import globalStyles from '../../styles';
import AllHotelsContainer from '../containers/allHotelsContainer/allHotelsContainer';

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
