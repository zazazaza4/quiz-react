import { StateSchema } from '@/app/providers/StoreProvider';

import { getQuizIsLoading } from './getQuizIsLoading';

describe('getLoginIsLoading', () => {
  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      quiz: {
        isLoading: true,
      },
    };
    expect(getQuizIsLoading(state as StateSchema)).toEqual(true);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getQuizIsLoading(state as StateSchema)).toEqual(false);
  });
});
