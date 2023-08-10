import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  badge: {
    backgroundColor: '#145855',
    justifyContent: 'center',
    height: verticalScale(22),
    borderRadius: horizontalScale(50),
  },
  title: {
    fontFamily: 'Inter',
    fontWeight: '600',
    color: '#ffffff',
    fontSize: scaleFontSize(10),
    lineHeight: scaleFontSize(12),
    textAlign: 'center',
  },
});

export default style;
