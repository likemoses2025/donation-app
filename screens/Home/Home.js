/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Pressable, SafeAreaView, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import globalStyles from '../../assets/styles/globalStyle';
import Header from '../../components/Header/Header';
import {updateFirstName} from '../../redux/reducers/User';

const Home = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  console.log(user);
  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <Header title={user.firstName + user.lastName} />
      <Pressable onPress={() => dispatch(updateFirstName({firstName: 'J'}))}>
        <Text>Press me to change first name</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Home;
