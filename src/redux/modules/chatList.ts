import { Action, PayloadAction, createSlice } from '@reduxjs/toolkit';
import store from '../config/configStore';

export interface ChatState {
  nickname: string;
  senderId: string | number;
  message: string;
  sendDate: string; //예시: 2017-02-11
  sendTime: string; //예시: 13:05
}

export interface ChatListState {
  roomChatList: ChatState[];
  extraChatList: ChatState[];
}

export const getRoomId = (chat: ChatState) => {
  const myId = store.getState().userInfo.userId;
  const senderId = chat.senderId;

  return myId < +senderId ? `${myId}-${senderId}` : `${senderId}-${myId}`;
};

let timer: string | number | NodeJS.Timeout | undefined;
const setRemoveTimer = (time: number) => {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(() => store.dispatch(removeExtraChats()), time);
};

const initialState: ChatListState = {
  roomChatList: [],
  extraChatList: [],
};

const chatListSlice = createSlice({
  name: 'chatList',
  initialState,
  reducers: {
    addExtraChat: ({ roomChatList, extraChatList }, action: PayloadAction<ChatState>) => {
      setRemoveTimer(2000);
      return { roomChatList, extraChatList: [...extraChatList, action.payload] };
    },
    removeExtraChats: ({ roomChatList }, action: Action<string>) => {
      return { roomChatList, extraChatList: [] };
    },
    addRoomChat: ({ roomChatList, extraChatList }, action: PayloadAction<ChatState>) => {
      setRemoveTimer(2000);
      return { roomChatList: [...roomChatList, action.payload], extraChatList };
    },
    removeRoomChats: ({ extraChatList }, action: Action<string>) => {
      return { roomChatList: [], extraChatList };
    },
  },
});

export const { addRoomChat, addExtraChat, removeRoomChats, removeExtraChats } = chatListSlice.actions;
export default chatListSlice.reducer;
