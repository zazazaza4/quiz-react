import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';

import { User, UserSchema } from '../types/user';

const initialState: UserSchema = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<User>) => {
      state.date = action.payload;
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(state.date));
    },
    reset: (state) => {
      state.date = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
