import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, ScrollView, Pressable} from 'react-native';
import style from './style';
import Input from '../../components/Input/Input';
import globalStyles from '../../assets/styles/globalStyle';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import BackButton from '../../components/BackButton/BackButton';

const Registration = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  console.log(email);
  console.log(password);

  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <BackButton
        style={style.backButton}
        onPress={() => navigation.goBack()}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.container}>
        <View style={style.loginContainer}>
          <View style={globalStyles.marginBottom24}>
            <Header type={1} title={'Hello and Welcome !'} />
          </View>
          <View style={globalStyles.marginBottom24}>
            <Input
              placeHolder={'Enter Full Name'}
              label={'First & Last Name'}
              onChangeText={value => setEmail(value)}
            />
          </View>
          <View style={globalStyles.marginBottom24}>
            <Input
              placeHolder={'Enter Your Email...'}
              label={'Eamil'}
              onChangeText={value => setEmail(value)}
              keyboardType={'email-address'}
            />
          </View>
          <View style={globalStyles.marginBottom24}>
            <Input
              secureTextEntry={true}
              placeHolder={'*******'}
              label={'Password'}
              onChangeText={value => setPassword(value)}
            />
          </View>
          <View style={globalStyles.marginBottom24}>
            <Button title={'Registration'} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Registration;
