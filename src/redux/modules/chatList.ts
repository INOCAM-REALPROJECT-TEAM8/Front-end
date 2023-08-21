import { Action, PayloadAction, createSlice } from '@reduxjs/toolkit';
import store from '../config/configStore';

export interface ChatState {
  nickname: string;
  senderId: number;
  message: string;
  createdAt: string; //예시: 2023-08-11T06:33:44.938306
}

export interface ChatListState {
  roomChat: ChatState | null;
  extraChatList: ChatState[];
}

export const getRoomId = (opId: number) => {
  const myId = store.getState().userInfo.userId;

  return myId < opId ? `${myId}-${opId}` : `${opId}-${myId}`;
};

export const parseRoomId = (roomId: string | undefined) => {
  if (!roomId) return { myId: -1, opId: -1 };
  const [user1, user2] = roomId.split('-');
  const myId = store.getState().userInfo.userId;
  const opId = +user1 === myId ? +user2 : +user2 === myId ? +user1 : -1;

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
  roomChat: null,
  extraChatList: [],
};

const chatListSlice = createSlice({
  name: 'chatList',
  initialState,
  reducers: {
    addExtraChat: ({ roomChat, extraChatList }, action: PayloadAction<ChatState>) => {
      setRemoveTimer(2000);
      return { roomChat, extraChatList: [...extraChatList, action.payload] };
    },
    removeExtraChats: ({ roomChat }, action: Action<string>) => {
      return { roomChat, extraChatList: [] };
    },
    addRoomChat: ({ roomChat, extraChatList }, action: PayloadAction<ChatState>) => {
      setRemoveTimer(2000);
      return { roomChat: action.payload, extraChatList };
    },
    removeRoomChats: ({ extraChatList }, action: Action<string>) => {
      return { roomChat: null, extraChatList };
    },
  },
});

export const { addRoomChat, addExtraChat, removeRoomChats, removeExtraChats } = chatListSlice.actions;
export default chatListSlice.reducer;
