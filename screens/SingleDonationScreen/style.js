import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  container: {
    marginHorizontal: horizontalScale(20),
    marginTop: verticalScale(7),
  },
  image: {
    marginTop: verticalScale(12),
    marginBottom: verticalScale(24),
    borderRadius: horizontalScale(5),
    width: '100%',
    height: verticalScale(240),
  },
  badge: {
    marginBottom: verticalScale(16),
  },
  description: {
    marginLeft: horizontalScale(14),
    marginTop: verticalScale(7),
    fontFamily: 'Inter',
    fontSize: scaleFontSize(14),
    fontWeight: '400',
    lineHeight: scaleFontSize(22),
    marginBottom: verticalScale(10),
  },
  button: {marginHorizontal: horizontalScale(20)},
});

export default style;
