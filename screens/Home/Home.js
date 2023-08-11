import React from 'react';
import {SafeAreaView} from 'react-native';
import globalStyles from '../../assets/styles/globalStyle';
import Search from '../../components/Search/Search';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <Search
        onSearch={value => {
          console.log(value);
        }}
      />
    </SafeAreaView>
  );
};

export default Home;
