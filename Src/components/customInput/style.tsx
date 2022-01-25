import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const st = StyleSheet.create({
    container: {
        position: 'relative',
    },
    inputStyle: {
        width: width * 0.9,
        height: 50,
        borderColor: '#0096FF',
        backgroundColor: 'rgba(0,0,0,.1)',
        alignSelf: 'center',
        paddingHorizontal: 30,
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 10,
    },
});

export default st;
