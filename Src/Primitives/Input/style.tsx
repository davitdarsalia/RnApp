import {StyleSheet, Dimensions} from 'react-native';
import {ColorList} from '../../Constants/Enums';

const {width, height} = Dimensions.get('screen');

export const inputStyles = StyleSheet.create({
   inputWrapper: {
      width: width * 0.8,
      height: width * 0.13,
      alignSelf: 'center',
      marginVertical: width * 0.02,
      borderRadius: width * 0.02,
      paddingHorizontal: width * 0.04,
      backgroundColor: ColorList.inputGray,
   },
});
