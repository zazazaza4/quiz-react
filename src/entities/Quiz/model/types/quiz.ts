import { EntityState } from '@reduxjs/toolkit';

import { QuizType } from '../consts/quizConsts';

export interface OptionType {
  image?: string;
  value: string;
}

export interface Quiz {
  id: string;
  type: QuizType;
  question: string;
  description?: string;
  options: OptionType[];
}

export interface QuizSchema extends EntityState<Quiz> {
  isLoading: boolean;
  error?: string;
  total: number;
}
