import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from './@type';
import { namespace } from './actions';
import User from '../../@type/user';

const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
};

const authSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    setLoggedIn(state, action: PayloadAction<boolean>) {
      state.isLoggedIn = action.payload;
    },
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
  },
});

export default authSlice.reducer;
