import 'react-native';
import React from 'react';
import {
  matchSnapshotWithTheme,
  renderWithTheme
} from '@/helpers/functions/testing';

import Login from '@/screens/Login';

describe('tests in Login Screen', () => {
  test('matches snapshot', () => {
    matchSnapshotWithTheme(<Login />);
  });

  test('renders correctly', () => {
    renderWithTheme(<Login />);
  });
});
