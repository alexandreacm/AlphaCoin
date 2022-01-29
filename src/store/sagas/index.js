import { all } from 'redux-saga/effects';
import coinSaga from '@/store/sagas/coinSaga';

export default function* rootSaga() {
  yield all([coinSaga()]);
}
