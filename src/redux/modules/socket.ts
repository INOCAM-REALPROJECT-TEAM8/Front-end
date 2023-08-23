import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import * as StompJs from '@stomp/stompjs';

export interface SocketState {
  isConnected: boolean;
  stompClient: StompJs.Client | null;
}

const initialState: SocketState = {
  isConnected: false,
  stompClient: null,
};

const socketSlice = createSlice({
  name: 'socket',
  initialState,
  reducers: {
    connectSocket: state => {
      return { ...state, isConnected: true };
    },
    disconnectSocket: state => {
      return { ...state, isConnected: false };
    },
    setStompClient: (state, { payload }: PayloadAction<{ stompClient: StompJs.Client | null }>) => {
      return { ...state, stompClient: payload.stompClient };
    },
  },
});

export const { connectSocket, disconnectSocket, setStompClient } = socketSlice.actions;
export default socketSlice.reducer;
