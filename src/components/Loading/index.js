import React from 'react';
import { ActivityIndicator } from 'react-native';
import colors from '@/theme/colors';

import { StyledBackground } from './styles';

export default function Loading() {
  return (
    <StyledBackground>
      <ActivityIndicator size='large' color={colors.PRIMARY} />
    </StyledBackground>
  );
}
