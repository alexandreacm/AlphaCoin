import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import ThemeProvider from '@/components/ThemeProvider';

import colors from '@/theme/colors';
import Routes from '@/routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle='auto' backgroundColor={colors.PRIMARY} />
      <NavigationContainer>
        <ThemeProvider>
          <Routes />
        </ThemeProvider>
      </NavigationContainer>
    </>
  );
}
