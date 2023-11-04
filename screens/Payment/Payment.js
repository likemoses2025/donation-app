import {View, SafeAreaView, Text, ScrollView} from 'react-native';
import React from 'react';
import globalStyles from '../../assets/styles/globalStyle';
import Header from '../../components/Header/Header';
import style from './style';
import {useSelector} from 'react-redux';
import Button from '../../components/Button/Button';
import {StripeProvider, CardForm} from '@stripe/stripe-react-native';
import {PUBLISHKEY} from '@env';

const Payment = () => {
  const donationItemInformation = useSelector(
    state => state.donations.selectedDonationInformation,
  );

  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <ScrollView contentContainerStyle={style.paymentContainer}>
        <Header title={'Making Donation'} />
        <Text style={style.donationAmountDescription}>
          You are about to donate {donationItemInformation.price}
        </Text>
        <View>
          <StripeProvider publishableKey={`${PUBLISHKEY}`}>
            <CardForm style={style.cardForm} />
          </StripeProvider>
        </View>
      </ScrollView>
      <View style={style.button}>
        <Button title={'Donate'} />
      </View>
    </SafeAreaView>
  );
};

export default Payment;
