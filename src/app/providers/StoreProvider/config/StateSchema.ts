import { AxiosInstance } from 'axios';
import {
  AnyAction,
  CombinedState,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';

import { AnswersSchema } from '@/entities/Answer';
import { QuizSchema } from '@/entities/Quiz';
import { UserSchema } from '@/entities/User';

import { createReduxStore } from './store';

export interface StateSchema {
  quiz: QuizSchema;
  answers: AnswersSchema;

  // async
  user?: UserSchema;
}

export type StateSchemaKey = keyof StateSchema;

export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
  getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends ToolkitStore {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
