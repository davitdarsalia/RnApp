import {StyleSheet} from 'react-native';
import {colors} from '../../consts/colors';

const st = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: colors.background,
        borderRadius: 15,
        backgroundColor: colors.white,
        marginHorizontal: 10,
        width: 300,
        height: 450,
    },
    imageContainer: {
        alignItems: 'center',
        flex: 1,
        paddingVertical: 15,
        paddingHorizontal: 15,
    },
    image: {
        width: '100%',
        height: '100%',
        borderWidth: 1,
        borderColor: colors.white,
        borderRadius: 15,
    },
    infoContainer: {
        height: '30%',
        paddingHorizontal: 15,
    },
    label: {
        fontWeight: '500',
        fontSize: 20,
    },
    location: {
        fontWeight: '200',
        fontSize: 13,
        color: colors.lightFont,
    },
    priceContainer: {
        flexDirection: 'row',
    },
    price: {
        fontSize: 18,
    },
});

export default st;
