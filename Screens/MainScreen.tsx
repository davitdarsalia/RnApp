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

import {useNavigation} from '@react-navigation/native';
import {HeaderButton} from '../components';
import {colors} from '../consts/colors';
import globalStyles from '../styles';
import MainPageContainer from '../containers/mainPage/mainPage';

interface Props {}

const MainScreen: React.FC<Props> = ({}) => {
    const {setOptions} = useNavigation();

    useEffect(() => {
        setOptions({
            headerRight: () => (
                <HeaderButton
                    name={'person-outline'}
                    size={20}
                    color={colors.main}
                    onPress={() => {}}
                />
            ),
        });
    });

    return (
        <View style={globalStyles.screen}>
            <MainPageContainer />
        </View>
    );
};

export default MainScreen;
