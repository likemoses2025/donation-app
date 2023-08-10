import React from 'react';
import {SafeAreaView} from 'react-native';
import globalStyles from '../../assets/styles/globalStyle';
import Header from '../../components/Header/Header';
import Tab from '../../components/Tab/Tab';
import Badge from '../../components/Badge/Badge';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <Header title={'Azzahri. A.'} type={1} />

      <Badge title={'Badge'} isInactive={true} />
      <FontAwesomeIcon icon={faSearch} />
    </SafeAreaView>
  );
};

export default Home;
