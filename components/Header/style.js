import {StyleSheet} from 'react-native';
import {scaleFontSize} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  title1: {
    fontFamily: 'Inter',
    color: 'black',
    fontSize: scaleFontSize(24),
    lineHeight: scaleFontSize(29),
    fontWeight: '700',
  },
  title2: {
    fontFamily: 'Inter',
    color: 'black',
    fontSize: scaleFontSize(18),
    lineHeight: scaleFontSize(19),
    fontWeight: '700',
  },
  title3: {
    fontFamily: 'Inter',
    color: 'black',
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(17),
    fontWeight: '700',
  },
});

export default style;
