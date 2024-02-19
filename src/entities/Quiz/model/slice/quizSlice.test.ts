import { QuizType } from '../consts/quizConsts';
import { quizDataTotal } from '../consts/testData';
import { fetchQuizList } from '../services/fetchQuizList/fetchQuizList ';
import { QuizSchema } from '../types/quiz';
import { quizActions, quizReducer } from './quizSlice';

const quizList = [
  {
    id: '1',
    type: QuizType.SINGLE_SELECT,
    question: 'What is your preferred language?',
    description: 'Choose language',
    options: [
      { value: 'English' },
      { value: 'French' },
      { value: 'German' },
      { value: 'Spanish' },
    ],
  },
];

describe('quizSlice', () => {
  test('test setLoading', () => {
    const state: DeepPartial<QuizSchema> = { isLoading: false };
    expect(
      quizReducer(state as QuizSchema, quizActions.setLoading(true))
    ).toEqual({ isLoading: true });
  });

  test('test fetchQuizList.pending', () => {
    const state: DeepPartial<QuizSchema> = {
      isLoading: false,
      ids: [1, 2],
      entities: {
        1: { id: '1', question: 'Test 1' },
        2: { id: '2', question: 'Test 2' },
      },
      total: 2,
    };
    const newState = quizReducer(state as QuizSchema, fetchQuizList.pending);
    expect(newState.isLoading).toEqual(true);
    expect(newState.error).toBeUndefined();
    expect(newState.ids).toHaveLength(0);
    expect(newState.entities).toEqual({});
  });

  test('test fetchQuizList.fulfilled', () => {
    const mockPayload = [
      { id: 1, question: 'Test 1' },
      { id: 2, question: 'Test 2' },
    ];
    const state: DeepPartial<QuizSchema> = {
      isLoading: true,
      ids: [],
      entities: {},
      total: 0,
    };
    const newState = quizReducer(
      state as QuizSchema,
      fetchQuizList.fulfilled(quizList, '')
    );
    expect(newState.isLoading).toEqual(false);
    expect(newState.error).toBeUndefined();
    expect(newState.entities).toEqual({ 1: quizList[0] });
    expect(newState.ids).toHaveLength(quizList.length);
  });

  test('test fetchQuizList.rejected', () => {
    const state: DeepPartial<QuizSchema> = {
      isLoading: true,
      ids: [1, 2],
      entities: {
        1: { id: '1', question: 'Test 1' },
        2: { id: '2', question: 'Test 2' },
      },
      total: 2,
    };
    const newState = quizReducer(state as QuizSchema, fetchQuizList.rejected);
    expect(newState.isLoading).toEqual(false);
    expect(newState.ids).toHaveLength(2);
    expect(newState.entities).toEqual({
      1: { id: '1', question: 'Test 1' },
      2: { id: '2', question: 'Test 2' },
    });
    expect(newState.total).toEqual(quizDataTotal);
  });
});
