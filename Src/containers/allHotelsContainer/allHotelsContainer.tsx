import React, {useCallback} from 'react';
import {View, FlatList} from 'react-native';
import HotelItem from '../../components/hotelItem/index';

import st from './style';

interface Props {
    onHotelItem: () => void;
}

const AllHotelsContainer: React.FC<Props> = ({onHotelItem}) => {
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
            rating: 1,
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
            rating: 2,
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
            rating: 3.5,
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
            rating: 4.5,
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
            rating: 5,
            user_id: 5,
        },
    ];

    const renderItem = useCallback(({item}) => {
        return <HotelItem item={item} onHotelItem={onHotelItem} />;
    }, []);

    return (
        <View style={st.container}>
            <FlatList
                data={DATA}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.user_id.toString()}
                renderItem={renderItem}
            />
        </View>
    );
};

export default AllHotelsContainer;
