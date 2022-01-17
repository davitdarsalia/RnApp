import React from 'react';
import {View, Text} from 'react-native';

import st from './style';

interface Props {
    item: any;
}

const HotelItem: React.FC<Props> = ({item}) => {
    return (
        <View style={st.container}>
            <Text>{item.name}</Text>
        </View>
    );
};

export default HotelItem;
