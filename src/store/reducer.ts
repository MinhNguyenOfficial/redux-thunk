import { combineSlices } from '@reduxjs/toolkit';
import appSlice from './app/reducer';
import authSlice from './auth/reducer';

const rootReducer = combineSlices(appSlice, authSlice);
export default rootReducer;
