import React, {useCallback} from 'react';
import {View, Text, FlatList} from 'react-native';

import {HotelItem} from '../../components';

import st from './style';

interface Props {}

const MainPageContainer: React.FC<Props> = ({}) => {
    const DATA = [
        {
            name: 'lopota',
            location: 'kvareli',
            price: 200,
            discount_price: 150,
            email: 'lopota@gmail.com',
            phone: '995598000002',
            description: 'ფდსგფდსგfsdfsdfds',
            first_photo: 'images-1641970961507.jpg',
            user_id: 1,
        },
        {
            name: "Max's hotel",
            location: 'Netherlands',
            price: 10,
            discount_price: 12345,
            email: 'max@hotel.com',
            phone: '995598000000',
            description: 'Verstappen!',
            first_photo: 'images-1641971044101.jpg',
            user_id: 2,
        },
        {
            name: "maria's hotel",
            location: 'marias place',
            price: 200,
            discount_price: 150,
            email: 'mariahotel@gmail.com',
            phone: '995598000010',
            description: 'marias comment....\n',
            first_photo: 'images-1641984364318.jpg',
            user_id: 3,
        },
        {
            name: 'RedBull',
            location: 'Netherlands',
            price: 200,
            discount_price: 12,
            email: 'redbull@gmail.com',
            phone: '995598000000',
            description: 'Redbullllllllllllllllll',
            first_photo: 'images-1641985434015.jpg',
            user_id: 4,
        },
        {
            name: 'operator hotel',
            location: "opertaro's ",
            price: 200,
            discount_price: 150,
            email: 'oper@gmail.com',
            phone: '995598000004',
            description: 'randomoperator...',
            first_photo: 'images-1642231603549.jpg',
            user_id: 5,
        },
    ];

    const renderItem = useCallback(({item}) => {
        return <HotelItem item={item} />;
    }, []);

    return (
        <View style={st.container}>
            <Text style={st.label}>Currently available hotels: </Text>
            <View style={st.itemsContainer}>
                <FlatList
                    data={DATA}
                    horizontal={true}
                    keyExtractor={(item) => item.user_id.toString()}
                    renderItem={renderItem}
                />
            </View>
        </View>
    );
};

export default MainPageContainer;
