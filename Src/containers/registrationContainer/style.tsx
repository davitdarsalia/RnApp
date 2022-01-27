import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../consts/colors';

const {width, height} = Dimensions.get('window');

const st = StyleSheet.create({
    container: {
        //flex: 1,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    innerContainer: {
        height: 360,
        width: 360,
        borderWidth: 1,
        borderColor: colors.main,
        borderRadius: 15,
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,.3)',
        justifyContent: 'center',
        overflow: 'hidden',
        marginTop: 100,
    },
});

export default st;
