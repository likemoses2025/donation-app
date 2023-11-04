/* eslint-disable react/react-in-jsx-scope */
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import Home from '../screens/Home/Home';
import SingleDonationScreen from '../screens/SingleDonationScreen/SingleDonationScreen';
import Login from '../screens/Login/Login';
import Registration from '../screens/Registration/Registration';
import Payment from '../screens/Payment/Payment';

const Stack = createStackNavigator();

export const NonAuthenticated = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Login}
      screenOptions={{header: () => null, headerShown: false}}>
      <Stack.Screen name={Routes.Login} component={Login} />
      <Stack.Screen name={Routes.Registration} component={Registration} />
    </Stack.Navigator>
  );
};

export const Authenticated = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Home}
      screenOptions={{header: () => null, headerShown: false}}>
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen name={Routes.Payment} component={Payment} />
      <Stack.Screen
        name={Routes.SingleDonationScreen}
        component={SingleDonationScreen}
      />
    </Stack.Navigator>
  );
};
