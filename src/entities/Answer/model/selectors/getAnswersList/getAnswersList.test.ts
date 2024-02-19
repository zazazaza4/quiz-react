import { DeepPartial } from '@reduxjs/toolkit';

import { StateSchema } from '@/app/providers/StoreProvider';

import { getAnswersList } from './getAnswersList';

describe('getAnswersList', () => {
  test('should return answers list', () => {
    const answersList = [
      { answer: '1', order: 1, title: 'Title 1', type: 'd' },
      { answer: '2', order: 2, title: 'Title 2', type: 'd' },
      { answer: '3', order: 3, title: 'Title 3', type: 'd' },
    ];

    const state: DeepPartial<StateSchema> = {
      answers: {
        answers: answersList,
      },
    };

    expect(getAnswersList(state as StateSchema)).toEqual(answersList);
  });

  test('should return empty array with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getAnswersList(state as StateSchema)).toEqual([]);
  });
});
