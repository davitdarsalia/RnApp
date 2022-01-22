import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import globalStyles from '../../styles';
import HotelDetailContainer from '../containers/hotelDetailContainer/hotelDetailContainer';

interface Props {}

const HotelDetailScreen: React.FC<Props> = ({}) => {
    return (
        <View style={globalStyles.mainScreen}>
            <HotelDetailContainer />
        </View>
    );
};

export default HotelDetailScreen;
