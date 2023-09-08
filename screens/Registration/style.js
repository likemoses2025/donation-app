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
  backButton: {
    marginLeft: horizontalScale(14),
    marginTop: verticalScale(7),
  },
});

export default style;
