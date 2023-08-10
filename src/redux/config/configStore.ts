import { combineReducers, configureStore } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import userInfo, { UserState } from '../modules/userInfo';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['userInfo'],
};

const rootReducer = combineReducers({
  userInfo,
});

const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  devTools: true,
});

export interface SelectState {
  userInfo: UserState;
}

export default store;
