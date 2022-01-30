import React, { createContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import AsyncStorage from '@react-native-community/async-storage';
import { USER_KEY } from '@/helpers/constants/storageKeys';

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const { navigate } = useNavigation();

  async function SignIn(userName) {
    if (userName === '') return;

    setUser({ userName });
    await AsyncStorage.setItem(USER_KEY, userName);
    navigate('Intro');
  }

  return (
    <AuthContext.Provider value={{ user, SignIn }}>
      {children}
    </AuthContext.Provider>
  );
}
