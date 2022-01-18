import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import st from './style';

interface Props {
    item: any;
}

const HotelItem: React.FC<Props> = ({item}) => {
    return (
        <View style={st.container}>
            <TouchableOpacity style={st.imageContainer}>
                <Image
                    source={{
                        uri: 'https://cf.bstatic.com/xdata/images/hotel/max500/63471279.jpg?k=d2add6b91dec5f9ff6bf5f7d33a3250f906bc19987afa8872805f605a72802a1&o=&hp=1',
                    }}
                    style={st.image}
                />
            </TouchableOpacity>
            <View style={st.infoContainer}>
                <Text style={st.label}>{item.name}</Text>
                <Text style={st.location}>{item.location}</Text>
                <View style={st.priceContainer}>
                    <Text style={st.price}>{item.price}</Text>
                    <Text>{item.discount_price}</Text>
                </View>
            </View>
        </View>
    );
};

export default HotelItem;
