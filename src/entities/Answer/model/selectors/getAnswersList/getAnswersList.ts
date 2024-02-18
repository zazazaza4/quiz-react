import { StateSchema } from '@/app/providers/StoreProvider';

export const getAnswersList = (state: StateSchema) => state.answers.answers;
