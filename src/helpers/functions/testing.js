import React from 'react';
import { create } from 'react-test-renderer';
import { render } from '@testing-library/react-native';

import ThemeProvider from '@/components/ThemeProvider';

export const matchSnapshotWithTheme = component => {
  const tree = create(<ThemeProvider>{component}</ThemeProvider>).toJSON();
  expect(tree).toMatchSnapshot();
};

export const renderWithTheme = (component, options) => {
  return render(<ThemeProvider>{component}</ThemeProvider>, options);
};

export const createComponentWithTheme = component => {
  return create(<ThemeProvider>{component}</ThemeProvider>);
};
