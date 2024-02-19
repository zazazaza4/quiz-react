import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { fetchQuizList } from './fetchQuizList ';

jest.mock('i18next', () => ({
  language: 'en',
}));

const mockQuizData = {
  en: [
    { id: '1', question: 'Question 1' },
    { id: '2', question: 'Question 2' },
  ],
};

describe('fetchQuizList', () => {
  test('success fetchQuizList', async () => {
    const thunk = new TestAsyncThunk(fetchQuizList);
    thunk.api.get.mockReturnValue(
      Promise.resolve({
        data: mockQuizData.en,
      })
    );
    const expectedData = mockQuizData.en;

    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalledWith('/quiz/en');
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(expectedData);
  });

  test('error fetchQuizList', async () => {
    const thunk = new TestAsyncThunk(fetchQuizList);
    thunk.api.post.mockReturnValue(
      Promise.resolve({
        status: 403,
      })
    );

    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalledWith('/quiz/en');
    expect(result.payload).toEqual(mockQuizData.en);
  });
});
