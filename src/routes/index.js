import React, { useEffect, useState } from 'react';

import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-community/async-storage';
import { USER_KEY } from '@/helpers/constants/storageKeys';

import HomeStack from '@/routes/HomeStack';
import SignInStack from '@/routes/SignInStack';

const Routes = () => {
  const [Logged, setLogged] = useState(false);

  useEffect(() => {
    SplashScreen.hide();

    async function getUserName() {
      //await AsyncStorage.clear();
      const userName = await AsyncStorage.getItem(USER_KEY);
      setLogged(userName !== null);
    }

    getUserName();
  }, []);

  if (!Logged) {
    return <SignInStack />;
  }

  return <HomeStack />;
};

export default Routes;
