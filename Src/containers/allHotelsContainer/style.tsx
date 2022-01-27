import {StyleSheet} from 'react-native';
import {colors} from '../../consts/colors';

const st = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 25,
    },
    inputStyle: {
        width: '90%',
        height: 45,
        backgroundColor: colors.main,
        borderRadius: 5,
        paddingHorizontal: 15,
        color: '#fff',
    },
});

export default st;
