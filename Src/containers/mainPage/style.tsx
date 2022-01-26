import {StyleSheet} from 'react-native';
import {colors} from '../../consts/colors';

const st = StyleSheet.create({
    container: {
        flex: 1,
    },
    labelContainer: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    label: {
        fontSize: 18,
    },
    buttonLabel: {
        fontSize: 20,
        color: colors.main,
    },

    itemsContainer: {
        alignItems: 'center',
        paddingVertical: 25,
        paddingHorizontal: 15,
    },
    linearGradient: {
        flex: 1,
    },
});

export default st;
