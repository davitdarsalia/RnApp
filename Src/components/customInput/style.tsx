import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const st = StyleSheet.create({
    container: {
        position: 'relative',
    },
    inputStyle: {
        width: width * 0.9,
        height: 50,
        borderColor: '#8E2DE2',
        backgroundColor: 'rgba(0,0,0,.1)',
        alignSelf: 'center',
        paddingHorizontal: 30,
        borderWidth: 2.5,
        borderRadius: 5,
        marginVertical: 10,
        position: 'relative',
    },
    passwordIcon: {
        position: 'absolute',
        top: -50,
        right: 20,
    },
});

export default st;
