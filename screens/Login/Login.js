import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, ScrollView, Pressable} from 'react-native';
import style from './style';
import Input from '../../components/Input/Input';
import globalStyles from '../../assets/styles/globalStyle';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import {loginUser} from '../../api/user';
import {Routes} from '../../navigation/Routes';
import {useDispatch, useSelector} from 'react-redux';
import {resetToInitialState, logIn} from '../../redux/reducers/User';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // dispatch(resetToInitialState());

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

          {error.length > 0 && <Text style={style.error}>{error}</Text>}

          <View style={globalStyles.marginBottom24}>
            <Button
              title={'Login'}
              isDisabled={email.length <= 5 || password.length <= 5}
              onPress={async () => {
                let user = await loginUser(email, password);
                if (user.status === false) {
                  setError(user.error);
                } else {
                  setError('');
                  dispatch(logIn(user.data));
                  navigation.navigate(Routes.Home);
                }
              }}
            />
          </View>
          <Pressable
            style={style.registrationButton}
            onPress={() => navigation.navigate('Registration')}>
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
