import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { namespace } from './actions';
import { AppState } from './@type';

const initialState: AppState = {
  isAppLoading: true,
};

const appSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    setAppLoading(state, action: PayloadAction<boolean>) {
      state.isAppLoading = action.payload;
    },
  },
});

export const { setAppLoading } = appSlice.actions;

export default appSlice.reducer;
