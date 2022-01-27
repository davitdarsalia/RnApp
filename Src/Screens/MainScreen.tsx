import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import MainPageContainer from '../containers/mainPage/mainPage';
import {HeaderButton} from '../components';

import {colors} from '../consts/colors';
import globalStyles from '../../styles';

import {useNavigation} from '@react-navigation/native';
import {FeedStackNavProp, RootStackNavProp} from '../Navigation/Types';

import st from '../../styles';

interface Props {}

const MainScreen: React.FC<Props> = ({}) => {
    const {navigate, setOptions} =
        useNavigation<
            FeedStackNavProp<
                'allHotelsScreen' | 'hotelDetailScreen' | 'mainScreen'
            >
        >();

    /* Navigation */

    const onSeeAll = () => {
        navigate('allHotelsScreen');
    };

    const onHotelItem = () => {
        navigate('hotelDetailScreen');
    };

    const onRegistration = () => {
        navigate('reg');
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
            headerLeft: () => <Text style={st.username}>Davit Darsalia</Text>,
        });
    });

    return (
        <View style={globalStyles.mainScreen}>
            <MainPageContainer onSeeAll={onSeeAll} onHotelItem={onHotelItem} />
        </View>
    );
};

export default MainScreen;
