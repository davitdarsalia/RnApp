import React, {useEffect} from 'react';
import {
    View,
    Button,
    Text,
    TextInput,
    FlatList,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import MainPageContainer from '../containers/mainPage/mainPage';
import {HeaderButton} from '../components';

import {colors} from '../consts/colors';
import globalStyles from '../../styles';

import {useNavigation} from '@react-navigation/native';

interface Props {}

const MainScreen: React.FC<Props> = ({}) => {
    const {navigate, setOptions} = useNavigation();

    const onSeeAll = () => {
        navigate('allHotelsScreen');
    };

    const onHotelItem = () => {
        navigate('hotelDetailScreen');
    };

    const onRegistration = () => {
        navigate('registrationScreen');
    };

    useEffect(() => {
        setOptions({
            headerRight: () => (
                <HeaderButton
                    name={'person-outline'}
                    size={20}
                    color={colors.main}
                    onPress={onRegistration}
                />
            ),
        });
    });

    return (
        <View style={globalStyles.mainScreen}>
            <MainPageContainer onSeeAll={onSeeAll} onHotelItem={onHotelItem} />
        </View>
    );
};

export default MainScreen;
