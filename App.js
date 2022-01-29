import React from 'react';
import { Provider } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';

import ThemeProvider from '@/components/ThemeProvider';

import store from '@/store';

import Routes from '@/routes';

export default function App() {
  return (
    <>
      <NavigationContainer>
        <ThemeProvider>
          <Provider store={store}>
            <Routes />
          </Provider>
        </ThemeProvider>
      </NavigationContainer>
    </>
  );
}
