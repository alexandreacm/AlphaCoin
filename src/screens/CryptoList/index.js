import React, { useEffect, useState } from 'react';
import { TextInput } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import AsyncStorage from '@react-native-community/async-storage';
import { USER_KEY } from '@/helpers/constants/storageKeys';

import { useDispatch, useSelector } from 'react-redux';
import { LOADING_COINS, LOADING_FILTER_COINS } from '@/store/slices/coinSlice';

import useConnection from '@/hooks/useConnection';
import storage from '@/store/storage';

import {
  StyledContainer,
  StyledHeader,
  StyledButtonFilter,
  StyledLabelText,
  StyledViewAreaInput,
  StyledIcon,
  StyledNoInternetView,
  StyledNoInternetText,
  StyledLabel as Label
} from './styles';

import Header from '@/components/Header';

import colors from '@/theme/colors';
import CoinList from './CoinList';

export default function CryptoList() {
  const dispatch = useDispatch();
  const [textToSearch, setTextToSearch] = useState('');
  const [user, setUser] = useState();
  const [coins, setCoins] = useState([]);

  const { connected } = useConnection();
  const checkConnection = !connected && connected != null;

  const { isLoading, coinsData, hasError, errorMessage } = useSelector(
    ({ coins }) => coins
  );
  const isFocused = useIsFocused();

  const filterData = () => {
    if (!checkConnection) {
      if (textToSearch.length >= 1) {
        dispatch(LOADING_FILTER_COINS({ textToSearch, coinsData }));
      } else {
        dispatch(LOADING_COINS());
      }
    }
  };

  async function loadingCoins() {
    const coinsStorage = await storage.getLocalCoins();

    if (checkConnection) {
      setCoins(JSON.parse(coinsStorage));
      console.log('coinsStorage', coinsStorage.length);
    }

    if (!checkConnection) {
      dispatch(LOADING_COINS());
    }
  }

  useEffect(() => {
    filterData();
  }, [textToSearch]);

  useEffect(() => {
    async function getUserName() {
      const user = await AsyncStorage.getItem(USER_KEY);
      if (user !== null) setUser(user);
    }

    getUserName();
    loadingCoins();
  }, [checkConnection]);

  return (
    <StyledContainer>
      <Header
        userName={user}
        backgroundColor={colors.PRIMARY}
        isFocused={isFocused}
      />
      <StyledHeader color={colors.PRIMARY}>
        <StyledViewAreaInput>
          <StyledIcon name='search' size={25} color={colors.BLACK} />
          <TextInput
            style={{ width: '85%', height: 35 }}
            value={textToSearch}
            onChangeText={setTextToSearch}
            placeholder='Search...'
            placeholderTextColor={colors.BLACK}
          />
        </StyledViewAreaInput>
        <StyledButtonFilter>
          <StyledLabelText fontWeight={400}>Filter</StyledLabelText>
        </StyledButtonFilter>
      </StyledHeader>

      {checkConnection && (
        <StyledNoInternetView>
          <StyledNoInternetText>OffLine</StyledNoInternetText>
        </StyledNoInternetView>
      )}

      {hasError && (
        <Label
          fontWeight={400}
          lineHeight={25}
          fontSize={14}
          marginBottom={15}
          color={colors.DANGER}
        >
          {errorMessage}
        </Label>
      )}
      <CoinList data={coins.length ? coins : coinsData} isLoading={isLoading} />
    </StyledContainer>
  );
}
