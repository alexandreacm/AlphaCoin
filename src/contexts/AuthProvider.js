import React, { createContext, useState } from 'react';

import AsyncStorage from '@react-native-community/async-storage';
import { USER_KEY } from '@/helpers/constants/storageKeys';

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [Logged, setLogged] = useState(false);
  const [user, setUser] = useState(null);

  function checkingUserLogged(userName) {
    setLogged(userName !== '' && typeof userName !== 'undefined');
    setUser(userName);
  }

  async function SignIn(userName) {
    if (userName === '' || typeof userName === 'undefined') return null;

    await AsyncStorage.setItem(USER_KEY, userName);
    checkingUserLogged(userName);
  }

  return (
    <AuthContext.Provider value={{ user, Logged, SignIn, checkingUserLogged }}>
      {children}
    </AuthContext.Provider>
  );
}
