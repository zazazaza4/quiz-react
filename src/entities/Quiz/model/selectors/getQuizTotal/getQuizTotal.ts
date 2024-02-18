import { StateSchema } from '@/app/providers/StoreProvider';

export const getQuizTotal = (state: StateSchema) => state.quiz.total;
