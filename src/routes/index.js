import React, { useEffect, useContext } from 'react';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-community/async-storage';
import { USER_KEY } from '@/helpers/constants/storageKeys';

import HomeStack from '@/routes/HomeStack';
import SignInStack from '@/routes/SignInStack';

import { AuthContext } from '@/contexts/AuthProvider';

const Routes = () => {
  const { Logged } = useContext(AuthContext);
  console.log(Logged);

  useEffect(() => {
    SplashScreen.hide();

    async function getUserName() {
      //await AsyncStorage.clear();
      const userName = await AsyncStorage.getItem(USER_KEY);
      if (userName !== null) {
      }
    }

    getUserName();
  }, []);

  return !Logged ? <SignInStack /> : <HomeStack />;
};

export default Routes;
