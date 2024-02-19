import { DeepPartial } from '@reduxjs/toolkit';

import { StateSchema } from '@/app/providers/StoreProvider';

import { getUserEmail } from './getUserEmail';

describe('getUserEmail', () => {
  test('should return user email', () => {
    const userEmail = 'test@example.com';

    const state: DeepPartial<StateSchema> = {
      user: {
        data: {
          email: userEmail,
        },
      },
    };

    expect(getUserEmail(state as StateSchema)).toEqual(userEmail);
  });

  test('should return empty string when user data is undefined', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        data: undefined,
      },
    };

    expect(getUserEmail(state as StateSchema)).toEqual('');
  });

  test('should return empty string with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getUserEmail(state as StateSchema)).toEqual('');
  });
});
