import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const st = StyleSheet.create({
    container: {
        position: 'relative',
    },
    inputStyle: {
        marginTop: 100,
        width: width * 0.9,
        height: 50,
        borderColor: '#0096FF',
        backgroundColor: 'rgba(0,0,0,.1)',
        alignSelf: 'center',
        paddingHorizontal: 30,
        borderWidth: 1,
        borderRadius: 5,
    },
    labelStyle: {
        fontSize: 15,
    },
    labelContainer: {
        position: 'absolute',
        top: 92,
        left: 30,
        width: 200,
        height: 20,
        backgroundColor: '#fff',
    },
});

export default st;
