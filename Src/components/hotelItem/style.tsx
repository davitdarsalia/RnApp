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
        alignSelf: 'center',
        height: 550,
        shadowColor: 'rgba(0,0,0,.3)',
        shadowOffset: {
            width: 5,
            height: 13,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14,
        marginVertical: 13,

        overflow: 'hidden',
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
    location: {
        fontWeight: '200',
        fontSize: 13,
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
});

export default st;
