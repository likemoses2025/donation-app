import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#2979F2',
    marginTop: verticalScale(16),
    width: horizontalScale(134),
    height: verticalScale(50),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginRight: verticalScale(10),
  },
  text: {
    color: '#fff',
    fontSize: scaleFontSize(14),
    fontFamily: 'Inter',
    fontWeight: '500',
    lineHeight: verticalScale(17),
  },
});

export default style;
