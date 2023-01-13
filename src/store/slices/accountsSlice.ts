import { createSlice } from '@reduxjs/toolkit';

interface Account {
  name: string;
  id: number;
}

interface Accounts {
  accounts: Account[];
}

const initialState: Accounts = {
  accounts: [],
};

const accountsSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    getAccounts: (state) => {
      state.accounts;
    },
  },
});

export const { getAccounts } = accountsSlice.actions;
export { accountsSlice };
