import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../consts/colors';

const {width} = Dimensions.get('window');

const st = StyleSheet.create({
    container: {
        width: width * 0.7,
        height: 45,
        borderRadius: 5,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: colors.lightBlue,
        borderWidth: 1,
        backgroundColor: colors.main,
    },
    buttonLabel: {
        fontSize: 20,
        fontWeight: '400',
        color: colors.white,
    },
});

export default st;
