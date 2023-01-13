import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface User {
  name: string;
}

const initialState: User = {
  name: 'Alex',
};

const userSlice = createSlice({
  name: 'UserSlice',
  initialState,
  reducers: {
    getUserName: (state) => {
      state.name;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getUserName } = userSlice.actions;
export { userSlice };
