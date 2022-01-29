import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '@/store/sagas';
import reducers from '@/store/slices';

export function createStore() {
  const sagaMiddleware = createSagaMiddleware();

  const newStore = configureStore({
    reducer: reducers,
    middleware: [sagaMiddleware]
  });

  sagaMiddleware.run(rootSaga);

  return newStore;
}
const store = createStore();

export default store;
