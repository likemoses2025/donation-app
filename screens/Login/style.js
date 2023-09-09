import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: horizontalScale(24),
    justifyContent: 'center',
  },

  title: {
    fontSize: scaleFontSize(24),
    color: '#022150',
    fontFamily: 'Inter-Bold',
    marginBottom: verticalScale(24),
  },
  registrationButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(16),
    color: '#FF0000',
    marginBottom: verticalScale(24),
  },
});

export default style;
