import React from 'react';
import { ThemeProvider as DefaultThemeProvider } from 'styled-components/native';

import theme from '@/theme';

export default function ThemeProvider({ children }) {
  return <DefaultThemeProvider theme={theme}>{children}</DefaultThemeProvider>;
}
