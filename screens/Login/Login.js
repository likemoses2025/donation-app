import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, ScrollView, Pressable} from 'react-native';
import style from './style';
import Input from '../../components/Input/Input';
import globalStyles from '../../assets/styles/globalStyle';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log(email);
  console.log(password);

  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.container}>
        <View style={style.loginContainer}>
          <View style={globalStyles.marginBottom24}>
            <Header type={1} title={'Welcome Back'} />
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
            <Button title={'Login'} />
          </View>
          <Pressable style={style.registrationButton}>
            <Header
              color={'#156CF7'}
              type={3}
              title={'Dont have an account?'}
            />
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
