import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '@/screens/CryptoList';
import Login from '@/screens/Login';

const { Navigator, Screen } = createNativeStackNavigator();

export default function SignInStack() {
  return (
    <Navigator initialRouteName='Login'>
      <Screen name='Home' component={Home} options={{ headerShown: false }} />
      <Screen name='Login' component={Login} options={{ headerShown: false }} />
    </Navigator>
  );
}
