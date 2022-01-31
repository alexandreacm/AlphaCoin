import React, { useEffect, useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-community/async-storage';
import { USER_KEY } from '@/helpers/constants/storageKeys';

import HomeStack from '@/routes/HomeStack';
import Login from '@/screens/Login';
import { AuthContext } from '@/contexts/AuthProvider';

const { Navigator, Screen } = createNativeStackNavigator();

const Routes = () => {
  const options = { headerShown: false };
  const { user, Logged, checkingUserLogged } = useContext(AuthContext);

  useEffect(() => {
    SplashScreen.hide();

    async function getUserLocalStorage() {
      //await AsyncStorage.clear();
      const userStorage = await AsyncStorage.getItem(USER_KEY);

      if (userStorage !== null) {
        checkingUserLogged(userStorage);
      }
    }

    getUserLocalStorage();
  }, []);

  console.log('Logged', Logged);
  console.log('user', user);

  if (!Logged && user == null) {
    return (
      <Navigator>
        <Screen name='SignIn' component={Login} options={options} />
      </Navigator>
    );
  }

  return <HomeStack />;
};

export default Routes;
