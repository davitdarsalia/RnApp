import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');

export const styles = StyleSheet.create({
   paperWrapper: {
      width: width * 0.95,
      height: width * 0.25,
      backgroundColor: 'rgba(0,0,0,.15)',
      borderRadius: 13,
      alignSelf: 'center',
      marginVertical: width * 0.03,
      overflow: 'hidden',
      padding: width * 0.03,
   },
});
