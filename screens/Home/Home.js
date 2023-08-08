import React from 'react';
import {View, SafeAreaView, Text} from 'react-native';

import globalStyles from '../../assets/styles/globalStyle';
import style from './style';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <Text>Home</Text>
    </SafeAreaView>
  );
};

export default Home;
