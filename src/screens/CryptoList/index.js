import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { LOADING_COINS } from '@/store/slices/coinSlice';

export default function CryptoList() {
  const dispatch = useDispatch();
  const { isLoading, coinsData } = useSelector(({ coins }) => coins);

  useEffect(() => {
    dispatch(LOADING_COINS());
  }, []);

  return (
    <View>
      {console.log(JSON.stringify(coinsData))}
      <Text>CryptoList</Text>
    </View>
  );
}
