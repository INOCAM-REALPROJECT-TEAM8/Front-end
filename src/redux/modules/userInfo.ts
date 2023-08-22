import { Action, PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface UserState {
  isLoggedIn: boolean;
  nickname: string;
  email: string;
  userId: number;
  prevUserId: number;
}

const initialState: UserState = {
  isLoggedIn: localStorage.getItem('refreshToken') ? true : false,
  nickname: '',
  email: '',
  userId: 0,
  prevUserId: 0,
};

const userSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    userLogin: (state, { payload }: PayloadAction<Omit<UserState, 'isLoggedIn' | 'prevUserId'>>) => {
      return { ...payload, isLoggedIn: true, prevUserId: payload.userId };
    },
    userLogout: (state, action: Action<string>) => {
      return { ...initialState, isLoggedIn: false, prevUserId: state.userId };
    },
    changeUserNickname: (state, { payload }: PayloadAction<Pick<UserState, 'nickname'>>) => {
      return { ...state, nickname: payload.nickname };
    },
  },
});

export const { userLogin, userLogout, changeUserNickname } = userSlice.actions;
export default userSlice.reducer;
