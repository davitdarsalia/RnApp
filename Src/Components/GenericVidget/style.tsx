import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

export const styles = StyleSheet.create({
   widgetWrapper: {
      width: width * 0.37,
      height: width * 0.37,
      borderRadius: width * 0.05,
      overflow: 'hidden',
      padding: width * 0.05,
      marginVertical: width * 0.02,
      margin: 5,
      alignSelf: 'center',
   },
});
