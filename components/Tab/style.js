import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  tab: {
    backgroundColor: '#2979F2',
    justifyContent: 'center',
    height: verticalScale(50),
    borderRadius: horizontalScale(50),
  },
  disabled: {opacity: 0.5},
  title: {
    fontFamily: 'Inter',
    fontWeight: '500',
    color: '#ffffff',
    fontSize: scaleFontSize(14),
    lineHeight: scaleFontSize(17),
    textAlign: 'center',
  },
  isInactiveTitle: {
    color: '#79869F',
  },
  isInactiveTab: {
    backgroundColor: '#F3F5F9',
  },
});

export default style;
