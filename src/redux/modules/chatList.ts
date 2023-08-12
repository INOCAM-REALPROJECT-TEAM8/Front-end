import { Action, PayloadAction, createSlice } from '@reduxjs/toolkit';
import store from '../config/configStore';

export interface ChatState {
  nickname: string;
  senderId: string | number;
  message: string;
  createdAt: string; //예시: 2023-08-11T06:33:44.938306
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

export const parseRoomId = (roomId: string | undefined) => {
  if (!roomId) return { myId: 0, opId: 0 };
  const [user1, user2] = roomId.split('-');
  const myId = store.getState().userInfo.userId;
  const opId = +user1 === myId ? user2 : user1;

  return { myId, opId };
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