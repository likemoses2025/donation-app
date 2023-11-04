import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  paymentContainer: {
    marginHorizontal: horizontalScale(24),
  },
  donationAmountDescription: {
    marginTop: verticalScale(12),
  },
  button: {
    marginHorizontal: horizontalScale(24),
  },
  cardForm: {
    height: verticalScale(300),
    marginTop: verticalScale(12),
  },
});
export default style;
