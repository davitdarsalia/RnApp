import {StyleSheet} from 'react-native';
import {colors} from './Src/consts/colors';

const globalStyles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'white',
    },
    mainScreen: {
        flex: 1,
        backgroundColor: colors.background,
    },
});

export default globalStyles;
