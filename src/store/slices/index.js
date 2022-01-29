import { combineReducers } from '@reduxjs/toolkit';

import coinSlice from '@/store/slices/coinSlice';

export default combineReducers({
  coins: coinSlice
});
