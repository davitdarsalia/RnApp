import BlurView from 'expo-blur/build/BlurView';
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
        <BlurView intensity={90} style={st.container}>
            <TouchableOpacity style={st.imageContainer} onPress={onHotelItem}>
                <Image
                    source={{
                        uri: `data:image/gif;base64,${item.first_photo}`,
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
                <View>
                    <Rating
                        imageSize={20}
                        startingValue={item.rating}
                        readonly={true}
                    />
                </View>
            </View>
        </BlurView>
    );
};

export default HotelItem;
