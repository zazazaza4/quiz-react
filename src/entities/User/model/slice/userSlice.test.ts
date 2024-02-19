import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';
import { localStorageMock } from '@/shared/lib/tests/localStorageMock/localStorageMock';

import { userActions, userReducer } from './userSlice';

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe('userSlice', () => {
  test('setData reducer', () => {
    const user = { email: 'some@da.c' };

    const state = userReducer(undefined, userActions.setData(user));

    expect(state).toEqual({ data: user });
    expect(localStorage.getItem(USER_LOCALSTORAGE_KEY)).toEqual(
      JSON.stringify(user)
    );
  });

  test('reset reducer', () => {
    localStorage.setItem(
      USER_LOCALSTORAGE_KEY,
      JSON.stringify({ email: 'some@da.c' })
    );

    const state = userReducer(undefined, userActions.reset());

    expect(state).toEqual({ data: undefined });
    expect(localStorage.getItem(USER_LOCALSTORAGE_KEY)).toBeUndefined();
  });
});
