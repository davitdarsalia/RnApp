import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

export const styles = StyleSheet.create({
   outerWrapper: {
      flex: 1,
      alignItems: 'center',
   },

   innerWrapper: {
      paddingVertical: width * 0.1,
      paddingHorizontal: width * 0.1,
      width: width,
      height: height,
      backgroundColor: 'rgba(0,0,0,.3)',
      position: 'absolute',
      left: -(width * 0.05),
      zIndex: 100,
   },
});
