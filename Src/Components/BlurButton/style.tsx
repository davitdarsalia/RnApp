import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

export const styles = StyleSheet.create({
   smallWrapper: {
      width: width * 0.1,
      height: width * 0.11,
      borderRadius: 10,
      marginVertical: width * 0.02,
      borderWidth: 0,
      alignSelf: 'center',
      backgroundColor: 'rgba(0,0,0,.11)',
      alignItems: 'center',
      justifyContent: 'center',
   },
   mediumWrapper: {
      width: width * 0.5,
      height: width * 0.11,
      borderRadius: 10,
      marginVertical: width * 0.02,
      borderWidth: 0,
      alignSelf: 'center',
      backgroundColor: 'rgba(0,0,0,.11)',
      alignItems: 'center',
      justifyContent: 'center',
   },
   largeWrapper: {
      width: width * 0.9,
      height: width * 0.11,
      borderRadius: 10,
      marginVertical: width * 0.02,
      borderWidth: 0,
      alignSelf: 'center',
      backgroundColor: 'rgba(0,0,0,.11)',
      alignItems: 'center',
      justifyContent: 'center',
   },
   labelSt: {
      fontSize: 15,
      fontWeight: '400',
   },
});
