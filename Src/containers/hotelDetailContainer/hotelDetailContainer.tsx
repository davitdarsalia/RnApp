import {Ionicons} from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';
import React from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    TouchableHighlight,
} from 'react-native';

import {Rating} from 'react-native-ratings';

import {colors} from '../../consts/colors';
import st from './style';

interface Props {}

const HotelDetailContainer: React.FC<Props> = ({}) => {
    const data = {
        name: "maria's hotel",
        location: 'marias place',
        price: 200,
        discount_price: 150,
        email: 'mariahotel@gmail.com',
        phone: '995598000010',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        first_photo: 'images-1641984364318.jpg',
        rating: 3.5,
        user_id: 3,
    };

    const discountPercent = Math.round(
        ((data.price - data.discount_price) / data.price) * 100,
    );

    return (
        <View style={st.container}>
            <TouchableOpacity style={st.imageContainer} onPress={() => {}}>
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
                        <Text style={st.label}>{data.name}</Text>
                        <View style={st.locationContainer}>
                            <Ionicons
                                name="ios-location-outline"
                                size={26}
                                color={colors.main}
                            />
                            <Text style={st.location}>{data.location}</Text>
                        </View>
                    </View>
                    <View>
                        <Rating
                            imageSize={20}
                            startingValue={data.rating}
                            readonly={true}
                        />
                    </View>
                </View>
                <View style={st.descriptionContainer}>
                    <Text style={st.descption}>{data.description}</Text>
                </View>
                <View style={st.priceContainer}>
                    <View style={st.price}>
                        <Text style={st.oldPriceLabel}>{data.price}$</Text>
                    </View>
                    <View style={st.discountPrice}>
                        <Text style={st.priceLabel}>
                            {data.discount_price}$
                        </Text>
                    </View>
                    <View style={st.percentBadge}>
                        <Text style={st.priceLabel}>-{discountPercent}%</Text>
                    </View>
                </View>

                <View style={st.contactContainer}>
                    <Text>Contact:</Text>
                    <Text>{data.email}</Text>
                    <Text>{data.phone}</Text>
                </View>
            </View>
        </View>
    );
};

export default HotelDetailContainer;
