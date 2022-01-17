import {StyleSheet} from 'react-native';
import {colors} from '../../consts/colors';

const st = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: colors.accent,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 2, height: 0},
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        marginHorizontal: 10,
        width: 300,
        height: 450,
    },
});

export default st;
