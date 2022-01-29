import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import { useDispatch, useSelector } from 'react-redux';
import { LOADING_COINS } from '@/store/slices/coinSlice';

import Header from '@/components/Header';
import colors from '@/theme/colors';

export default function CryptoList() {
  const dispatch = useDispatch();
  const { isLoading, coinsData } = useSelector(({ coins }) => coins);
  const isFocused = useIsFocused();

  useEffect(() => {}, []);

  return (
    <View>
      <Header
        useName='Alexandre Marques'
        backgroundColor={colors.PRIMARY}
        isFocused={isFocused}
      />
      <Text>CryptoList</Text>
    </View>
  );
}
