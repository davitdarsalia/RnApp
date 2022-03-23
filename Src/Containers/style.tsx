import {StyleSheet, Dimensions} from 'react-native';
import {ColorList} from '../Constants/Enums';

const {width, height} = Dimensions.get('screen');

export const styles = StyleSheet.create({
   MainHeader: {
      color: ColorList.lightBlack,
      fontSize: 17,
      fontWeight: 'bold',
   },
   CurrencyAmount: {
      marginVertical: width * 0.02,
   },
   ScrollViewSt: {
      width: width,
      height: height,
   },
});
