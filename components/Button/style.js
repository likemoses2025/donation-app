import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  button: {
    backgroundColor: '#2979F2',
    justifyContent: 'center',
    height: verticalScale(55),
    borderRadius: horizontalScale(50),
  },
  disabled: {opacity: 0.5},
  title: {
    fontFamily: 'Inter',
    fontWeight: '500',
    color: '#ffffff',
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19),
    textAlign: 'center',
  },
});

export default style;
