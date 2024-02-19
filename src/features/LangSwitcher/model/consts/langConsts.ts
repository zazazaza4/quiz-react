import { QuizType } from '@/entities/Quiz';

export const langQuiz = {
  id: '1',
  type: QuizType.SINGLE_SELECT,
  question: 'What is your preferred language?',
  description: 'Choose language',
  options: [
    { value: 'English' },
    { value: 'French' },
    { value: 'German' },
    { value: 'Spanish' },
  ],
};
