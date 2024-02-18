import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';

import { Quiz } from '../../types/quiz';
import { quizData } from './testData';

export const fetchQuizList = createAsyncThunk<
  Quiz[],
  void,
  ThunkConfig<string>
>('quiz/fetchQuizList', async (_, { extra, rejectWithValue }) => {
  try {
    const response = await extra.api.get('/quiz');

    return response.data;
  } catch (error) {
    return quizData;
  }
});
