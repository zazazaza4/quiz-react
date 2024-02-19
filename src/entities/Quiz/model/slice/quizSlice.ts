import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { StateSchema } from '@/app/providers/StoreProvider';

import { quizDataTotal } from '../consts/testData';
import { fetchQuizList } from '../services/fetchQuizList/fetchQuizList ';
import { Quiz, QuizSchema } from '../types/quiz';

export const quizAdapter = createEntityAdapter<Quiz>({
  selectId: (data) => data.id,
});

export const getQuizList = quizAdapter.getSelectors<StateSchema>(
  (state) => state.quiz || quizAdapter.getInitialState()
);

const initialState: QuizSchema = {
  isLoading: true,
  ids: [],
  entities: {},
  total: 0,
};

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuizList.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;
        quizAdapter.removeAll(state);
      })
      .addCase(fetchQuizList.fulfilled, (state, action) => {
        state.isLoading = false;
        quizAdapter.setAll(state, action.payload);
        state.total = action.payload.length;
      })
      .addCase(fetchQuizList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.total = quizDataTotal;
      });
  },
});

export const { actions: quizActions } = quizSlice;
export const { reducer: quizReducer } = quizSlice;
