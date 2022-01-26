import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const st = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    innerContainer: {
        height: height,
        width: width,
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,.3)',
        justifyContent: 'center',
    },
});

export default st;
