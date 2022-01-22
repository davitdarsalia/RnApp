import {StyleSheet} from 'react-native';
import {colors} from '../../consts/colors';

const st = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: colors.background,
        borderRadius: 15,
        backgroundColor: colors.white,
        width: '100%',
        height: '100%',
    },
    imageContainer: {
        alignItems: 'center',
        flex: 1,
    },
    image: {
        width: '100%',
        height: '95%',
    },
    infoContainer: {
        height: '50%',
        paddingHorizontal: 15,
    },
    labelWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    labelCountainer: {
        flexDirection: 'column',
    },
    label: {
        fontWeight: '500',
        fontSize: 20,
    },
    locationContainer: {
        flexDirection: 'row',
    },
    location: {
        fontWeight: '200',
        fontSize: 13,
        color: colors.lightFont,
        paddingHorizontal: 5,
    },
    descriptionContainer: {
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    descption: {
        fontWeight: '200',
        fontSize: 15,
        color: colors.lightFont,
    },
    priceContainer: {
        flexDirection: 'row',
        paddingHorizontal: 30,
        padding: 10,
        justifyContent: 'space-around',
    },
    price: {
        padding: 7,
        backgroundColor: colors.grey,
        borderWidth: 1,
        borderColor: colors.grey,
        borderRadius: 15,
    },
    oldPriceLabel: {
        fontSize: 18,
        textDecorationLine: 'line-through',
    },
    priceLabel: {
        fontSize: 18,
    },
    discountPrice: {
        padding: 7,
        backgroundColor: colors.accent,
        borderWidth: 1,
        borderColor: colors.accent,
        borderRadius: 15,
    },
    percentBadge: {
        padding: 7,
        backgroundColor: colors.red,
        borderWidth: 1,
        borderColor: colors.red,
        borderRadius: 15,
    },
    contactContainer: {
        margin: 20,
        padding: 25,
        borderWidth: 1,
        borderColor: colors.accent,
        borderRadius: 15,
    },
});

export default st;
