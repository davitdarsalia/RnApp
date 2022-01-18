import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Rating} from 'react-native-ratings';

import st from './style';

interface Props {
    item: any;
    onHotelItem: () => void;
}

const HotelItem: React.FC<Props> = ({item, onHotelItem}) => {
    const discountPercent = Math.round(
        ((item.price - item.discount_price) / item.price) * 100,
    );

    return (
        <View style={st.container}>
            <TouchableOpacity style={st.imageContainer} onPress={onHotelItem}>
                <Image
                    source={{
                        uri: 'https://cf.bstatic.com/xdata/images/hotel/max500/63471279.jpg?k=d2add6b91dec5f9ff6bf5f7d33a3250f906bc19987afa8872805f605a72802a1&o=&hp=1',
                    }}
                    style={st.image}
                />
            </TouchableOpacity>
            <View style={st.infoContainer}>
                <View style={st.labelWrapper}>
                    <View style={st.labelCountainer}>
                        <Text style={st.label}>{item.name}</Text>
                        <Text style={st.location}>{item.location}</Text>
                    </View>
                    <View>
                        <Rating
                            imageSize={20}
                            startingValue={item.rating}
                            readonly={true}
                        />
                    </View>
                </View>
                <View style={st.priceContainer}>
                    <View style={st.price}>
                        <Text style={st.oldPriceLabel}>{item.price}$</Text>
                    </View>
                    <View style={st.discountPrice}>
                        <Text style={st.priceLabel}>
                            {item.discount_price}$
                        </Text>
                    </View>
                    <View style={st.percentBadge}>
                        <Text style={st.priceLabel}>-{discountPercent}%</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default HotelItem;
