import { StateSchema } from '@/app/providers/StoreProvider';

export const getQuizIsLoading = (state: StateSchema) =>
  state.quiz.isLoading || false;
