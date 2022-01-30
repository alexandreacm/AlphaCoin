import { put, call, takeLatest } from 'redux-saga/effects';

import {
  LOADING_COINS,
  COINS_SUCCESS,
  COINS_FAILURE,
  LOADING_FILTER_COINS,
  FILTER_COINS_SUCCESS,
  FILTER_COINS_FAILURE
} from '@/store/slices/coinSlice';

export function* loadingCoins() {
  try {
    const response = yield call(
      fetch,
      'https://api.coinlore.net/api/tickers/?start=0&limit=50'
    );

    const { data } = yield response.json();

    yield put(COINS_SUCCESS({ coinsData: data }));
  } catch (error) {
    yield put(COINS_FAILURE({ errorMessage: error.response.data.message }));
  }
}

export function* filterCoins({ payload: { textToSearch, coinsData } }) {
  try {
    console.log(textToSearch);

    const coins = coinsData.filter(item => {
      return item.name.toLowerCase().includes(textToSearch.toLowerCase());
    });

    yield put(FILTER_COINS_SUCCESS({ coinsData: coins }));
  } catch (error) {
    yield put(
      FILTER_COINS_FAILURE({ errorMessage: error.response.data.message })
    );
  }
}

export default function* watcher() {
  yield takeLatest(LOADING_COINS, loadingCoins);
  yield takeLatest(LOADING_FILTER_COINS, filterCoins);
}
