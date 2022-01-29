import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '@/screens/Login';
import Home from '@/screens/CryptoList';
import RealTimeChart from '@/screens/RealTimeChart';

const { Navigator, Screen } = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Navigator initialRouteName='Home'>
      <Screen name='Home' component={Home} options={{ headerShown: false }} />
      <Screen name='Login' component={Login} />
      <Screen name='RealTimeChart' component={RealTimeChart} />
    </Navigator>
  );
}
