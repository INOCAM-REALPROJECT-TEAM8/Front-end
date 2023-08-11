import { combineReducers, configureStore } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import userInfo, { UserState } from '../modules/userInfo';
import chatList, { ChatListState, ChatState } from '../modules/chatList';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['userInfo'],
};

const rootReducer = combineReducers({
  userInfo,
  chatList,
});

const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  devTools: true,
});

export interface SelectState {
  userInfo: UserState;
  chatList: ChatListState;
}

export default store;
