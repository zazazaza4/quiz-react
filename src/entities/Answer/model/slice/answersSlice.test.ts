import { AnswersSchema } from '../types/answer';
import { answersActions, answersReducer } from './answersSlice';

const answer = {
  answer: '1',
  order: 1,
  title: 'title',
  type: 'd',
};

describe('answersSlice', () => {
  test('test addAnswer', () => {
    const state: DeepPartial<AnswersSchema> = { answers: [] };
    expect(
      answersReducer(state as AnswersSchema, answersActions.addAnswer(answer))
    ).toEqual({ answers: [answer] });
  });

  test('test clearAnswers', () => {
    const state: DeepPartial<AnswersSchema> = { answers: [answer] };
    expect(
      answersReducer(state as AnswersSchema, answersActions.clearAnswers())
    ).toEqual({ answers: [] });
  });
});
