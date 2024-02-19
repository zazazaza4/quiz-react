import { DeepPartial } from '@reduxjs/toolkit';

import { StateSchema } from '@/app/providers/StoreProvider';

import { getQuizTotal } from './getQuizTotal';

describe('getQuizTotal', () => {
  test('should return quiz total', () => {
    const total = 10;

    const state: DeepPartial<StateSchema> = {
      quiz: {
        total,
      },
    };

    expect(getQuizTotal(state as StateSchema)).toEqual(total);
  });

  test('should return 0 with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getQuizTotal(state as StateSchema)).toEqual(0);
  });

  test('should return 0 when quiz total is undefined', () => {
    const state: DeepPartial<StateSchema> = {
      quiz: {
        total: undefined,
      },
    };

    expect(getQuizTotal(state as StateSchema)).toEqual(0);
  });
});
