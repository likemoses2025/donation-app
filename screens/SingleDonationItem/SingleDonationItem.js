import {View, Text} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const SingleDonationItem = () => {
  const donationItemInformation = useSelector(
    state => state.donations.selectedDonationInformation,
  );
  console.log('donationItemInformation', donationItemInformation);

  return (
    <View>
      <Text>SingleDonationItem</Text>
    </View>
  );
};

export default SingleDonationItem;
