import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer';

export type RootState = ReturnType<typeof rootReducer>;

function configureMainStore() {
  const store = configureStore({
    reducer: rootReducer,
  });

  return store;
}

const store = configureMainStore();
export default store;

export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
