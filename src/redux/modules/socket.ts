import { createSlice } from '@reduxjs/toolkit';

export interface SocketState {
  isConnected: boolean;
}

const initialState: SocketState = {
  isConnected: false,
};

const socketSlice = createSlice({
  name: 'socket',
  initialState,
  reducers: {
    connectSocket: () => {
      return { isConnected: true };
    },
    disconnectSocket: () => {
      return { isConnected: false };
    },
  },
});

export const { connectSocket, disconnectSocket } = socketSlice.actions;
export default socketSlice.reducer;
