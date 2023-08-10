import { Action, PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface UserState {
  isLoggedIn: boolean;
  nickname: string;
  email: string;
  userId: number;
}

const initialState: UserState = {
  isLoggedIn: localStorage.getItem('accessToken') ? true : false,
  nickname: '',
  email: '',
  userId: 0,
};

const userSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    userLogin: (state, action: PayloadAction<Omit<UserState, 'isLoggedIn'>>) => {
      return { isLoggedIn: true, ...action.payload };
    },
    userLogout: (state, action: Action<string>) => {
      return initialState;
    },
  },
});

export const { userLogin, userLogout } = userSlice.actions;
export default userSlice.reducer;
