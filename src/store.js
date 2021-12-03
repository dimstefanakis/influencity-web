import { configureStore } from '@reduxjs/toolkit';
import accountTypeSlice from './features/AccountType/slices/accountTypeSlice';

const store = configureStore({
  reducer: {
    accountType: accountTypeSlice.reducer,
  },
});

export default store;
