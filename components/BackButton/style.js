import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  container: {
    width: horizontalScale(44),
    height: verticalScale(44),
    backgroundColor: '#fafafa',
    borderRadius: horizontalScale(26),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default style;
