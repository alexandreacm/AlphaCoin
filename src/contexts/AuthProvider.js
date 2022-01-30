import React, { createContext, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { USER_KEY } from '@/helpers/constants/storageKeys';

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [Logged, setLogged] = useState(false);

  async function SignIn(userName) {
    if (userName === '') return;

    setUser({ userName });
    await AsyncStorage.setItem(USER_KEY, userName);
    setLogged(!Logged);
  }

  return (
    <AuthContext.Provider value={{ user, SignIn, Logged }}>
      {children}
    </AuthContext.Provider>
  );
}
