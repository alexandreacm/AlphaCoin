import React, { useState, useEffect, useContext } from 'react';
import { View, Text } from 'react-native';
import {
  useRoute,
  useIsFocused,
  useNavigation
} from '@react-navigation/native';

import AsyncStorage from '@react-native-community/async-storage';
import { USER_KEY } from '@/helpers/constants/storageKeys';

import Header from '@/components/Header';

import { useDispatch, useSelector } from 'react-redux';
import { LOADING_COINS } from '@/store/slices/coinSlice';

import colors from '@/theme/colors';

export default function RealTimeChart() {
  const { isLoading, coinsData, hasError, errorMessage } = useSelector(
    ({ coins }) => coins
  );

  const { goBack } = useNavigation();
  const isFocused = useIsFocused();
  const [user, setUser] = useState();
  const dispatch = useDispatch();

  const {
    params: { id }
  } = useRoute();

  function loadingCoins() {
    dispatch(LOADING_COINS());
  }

  useEffect(() => {
    async function getUserName() {
      const userName = await AsyncStorage.getItem(USER_KEY);
      if (userName !== null) setUser(userName);
    }

    getUserName();

    loadingCoins();
  }, []);

  return (
    <View>
      <Header
        showBackButton
        onBackPress={() => {
          goBack();
        }}
        userName={user}
        backgroundColor={colors.PRIMARY}
        isFocused={isFocused}
      />
      <Text>RealTimeChart</Text>
    </View>
  );
}
