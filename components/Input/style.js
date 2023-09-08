import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(167, 167, 167, 0.5)',
    paddingVertical: verticalScale(12),
  },
  label: {
    fontFamily: 'Inter',
    fontWeight: '400',
    color: '#36455A',
    fontSize: scaleFontSize(12),
    lineHeight: scaleFontSize(15),
  },
});

export default style;
