import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  coinsData: [],
  isLoading: false,
  hasError: false,
  errorMessage: null
};

const coinSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {
    LOADING_COINS: state => ({ ...state, isLoading: true }),
    COINS_SUCCESS: (state, { payload: { coinsData } }) => ({
      ...state,
      coinsData,
      isLoading: false
    }),
    COINS_FAILURE: (state, { payload: { errorMessage } }) => ({
      ...state,
      isLoading: false,
      hasError: true,
      errorMessage
    })
  }
});

const { actions, reducer } = coinSlice;

export const { LOADING_COINS, COINS_SUCCESS, COINS_FAILURE } = actions;

export default reducer;
