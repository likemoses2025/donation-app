import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, ScrollView, Pressable} from 'react-native';
import style from './style';
import Input from '../../components/Input/Input';
import globalStyles from '../../assets/styles/globalStyle';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import BackButton from '../../components/BackButton/BackButton';
import {createUser} from '../../api/user';

const Registration = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');

  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

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
              onChangeText={value => setFullName(value)}
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
          {error.length > 0 && <Text style={style.error}>{error}</Text>}
          {success.length > 0 && <Text style={style.success}>{success}</Text>}
          <View style={globalStyles.marginBottom24}>
            <Button
              isDisabled={
                fullName.length <= 2 || email.length <= 5 || password.length < 6
              }
              title={'Registration'}
              onPress={async () => {
                let user = await createUser(fullName, email, password);
                if (user.error) {
                  setError(user.error);
                } else {
                  setError('');
                  setSuccess('You have successfully registered !!');
                  setTimeout(() => navigation.goBack(), 3000);
                }
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Registration;
