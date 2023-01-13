import { combineReducers } from '@reduxjs/toolkit';
import { accountsSlice } from './accountsSlice';
import { userSlice } from './userSlice';

export const rootReducer = combineReducers({
  user: userSlice.reducer,
  accounts: accountsSlice.reducer,
});
