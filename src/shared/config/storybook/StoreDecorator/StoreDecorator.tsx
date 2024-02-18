/* eslint-disable zazazaza4-prod-plugin/layer-imports */
import { Decorator } from '@storybook/react';

import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';

import { userReducer } from '@/entities/User';

import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
  user: userReducer,
};

export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList): Decorator =>
  (Story) => (
    <StoreProvider
      initialState={state}
      asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
      <Story />
    </StoreProvider>
  );
