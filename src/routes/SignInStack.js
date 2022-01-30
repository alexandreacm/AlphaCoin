import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '@/screens/CryptoList';
import Login from '@/screens/Login';

const { Navigator, Screen } = createNativeStackNavigator();

export default function SignInStack() {
  return (
    <Navigator initialRouteName='SignIn'>
      <Screen name='Intro' component={Home} options={{ headerShown: false }} />
      <Screen
        name='SignIn'
        component={Login}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
}
