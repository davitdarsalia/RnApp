import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

export const styles = StyleSheet.create({
   modalWrapper: {
      width,
      height,
      marginLeft: -(width * 0.05),
      backgroundColor: 'white',
      alignItems: 'center',
      padding: width * 0.1,
   },
});
