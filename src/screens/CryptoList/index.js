import React, { useEffect, useState } from 'react';
import { TextInput } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import { useDispatch, useSelector } from 'react-redux';
import { LOADING_COINS, LOADING_FILTER_COINS } from '@/store/slices/coinSlice';

import {
  StyledContainer,
  StyledHeader,
  StyledButtonFilter,
  StyledLabelText,
  StyledViewAreaInput,
  StyledIcon
} from './styles';

import Header from '@/components/Header';

import colors from '@/theme/colors';
import CoinList from './CoinList';

export default function CryptoList() {
  const dispatch = useDispatch();
  const [textToSearch, setTextToSearch] = useState('');

  const { isLoading, coinsData, hasError, errorMessage } = useSelector(
    ({ coins }) => coins
  );
  const isFocused = useIsFocused();

  const filterData = () => {
    if (textToSearch.length >= 1) {
      dispatch(LOADING_FILTER_COINS({ textToSearch, coinsData }));
    } else {
      dispatch(LOADING_COINS());
    }
  };

  function loadingCoins() {
    dispatch(LOADING_COINS());
  }

  useEffect(() => {
    filterData();
  }, [textToSearch]);

  useEffect(() => {
    loadingCoins();
  }, []);

  return (
    <StyledContainer>
      <Header
        userName='Alexandre Marques'
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

      {hasError && (
        <Label
          textAlign='center'
          fontWeight={400}
          fontSize={12}
          marginBottom={8}
          color={colors.DANGER}
        >
          {errorMessage}
        </Label>
      )}

      <CoinList data={coinsData} isLoading={isLoading} />
    </StyledContainer>
  );
}
