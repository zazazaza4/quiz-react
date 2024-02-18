import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ANSWERS_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';

import { Answer, AnswersSchema } from '../types/answer';

const initialState: AnswersSchema = {
  isLoading: false,
  answers: [],
};

export const answersSlice = createSlice({
  name: 'answers',
  initialState,
  reducers: {
    addAnswer: (state, action: PayloadAction<Answer>) => {
      const { order } = action.payload;
      const index = state.answers.findIndex((answer) => answer.order === order);
      if (index === -1) {
        state.answers.push(action.payload);
      } else {
        state.answers[index] = action.payload;
      }

      localStorage.setItem(
        ANSWERS_LOCALSTORAGE_KEY,
        JSON.stringify(state.answers)
      );
    },
    clearAnswers: (state) => {
      state.answers = [];
      localStorage.removeItem(ANSWERS_LOCALSTORAGE_KEY);
    },
  },
});

export const { actions: answersActions } = answersSlice;
export const { reducer: answersReducer } = answersSlice;
