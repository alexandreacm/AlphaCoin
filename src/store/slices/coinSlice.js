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
    }),
    LOADING_FILTER_COINS: state => ({ ...state, isLoading: true }),
    FILTER_COINS_SUCCESS: (state, { payload: { coinsData } }) => ({
      ...state,
      coinsData,
      isLoading: false
    }),
    FILTER_COINS_FAILURE: (state, { payload: { errorMessage } }) => ({
      ...state,
      isLoading: false,
      hasError: true,
      errorMessage
    }),
    LOADING_LOCAL_COINS: state => ({ ...state, isLoading: true }),
    LOCAL_COINS_SUCCESS: (state, { payload: { coinsData } }) => ({
      ...state,
      coinsData,
      isLoading: false
    }),
    LOCAL_COINS_FAILURE: (state, { payload: { errorMessage } }) => ({
      ...state,
      isLoading: false,
      hasError: true,
      errorMessage
    })
  }
});

const { actions, reducer } = coinSlice;

export const {
  LOADING_COINS,
  COINS_SUCCESS,
  COINS_FAILURE,
  LOADING_FILTER_COINS,
  FILTER_COINS_SUCCESS,
  FILTER_COINS_FAILURE,
  LOADING_LOCAL_COINS,
  LOCAL_COINS_SUCCESS,
  LOCAL_COINS_FAILURE
} = actions;

export default reducer;
