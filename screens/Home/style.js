import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  header: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(24),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerIntroText: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19),
    fontWeight: '400',
    color: '#636776',
  },
  username: {
    marginTop: verticalScale(5),
  },
  profileImage: {
    width: horizontalScale(50),
    height: verticalScale(50),
  },
  searchBox: {
    marginHorizontal: horizontalScale(24),
    marginTop: verticalScale(20),
  },
  highlightedImageContainer: {
    marginHorizontal: horizontalScale(24),
    marginTop: horizontalScale(20),
  },
  highlightedImage: {
    width: '100%',
    height: horizontalScale(160),
    marginTop: verticalScale(6),
  },
  categoryContainer: {
    marginLeft: horizontalScale(24),
  },
  tab: {marginRight: horizontalScale(10)},
  categoryHeader: {
    marginHorizontal: horizontalScale(24),
    marginBottom: verticalScale(10),
  },
  donationItemsContainer: {
    marginHorizontal: horizontalScale(24),
    marginTop: verticalScale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  singleDonationItem: {
    maxWidth: '49%',
    marginBottom: verticalScale(23),
  },
});

export default style;
