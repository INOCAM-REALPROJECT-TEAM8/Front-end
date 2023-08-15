import { combineReducers, configureStore } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import userInfo, { UserState } from '../modules/userInfo';
import chatList, { ChatListState } from '../modules/chatList';
import socket from '../modules/socket';
import { SocketState } from '../modules/socket';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['userInfo'],
};

const rootReducer = combineReducers({
  userInfo,
  chatList,
  socket,
});

const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  devTools: true,
  middleware: defaultMiddleware =>
    defaultMiddleware({
      serializableCheck: false,
    }),
});

export interface SelectState {
  userInfo: UserState;
  chatList: ChatListState;
  socket: SocketState;
}

export default store;
