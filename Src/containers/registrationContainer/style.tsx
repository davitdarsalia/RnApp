import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const st = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 200,
    },
});

export default st;
