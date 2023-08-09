import React from 'react';
import {View, SafeAreaView, Text} from 'react-native';

import globalStyles from '../../assets/styles/globalStyle';
import style from './style';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <Header title={'Azzahri. A.'} type={1} />
      <Button
        title={'Donatee'}
        isDisabled={false}
        onPress={() => console.log('OnPress Me!!')}
      />
      <Button title={'Donatee'} isDisabled={true} />
    </SafeAreaView>
  );
};

export default Home;
