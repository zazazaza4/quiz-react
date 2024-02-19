import type { Meta, StoryObj } from '@storybook/react';

import { QuizType } from '../../model/consts/quizConsts';
import { QuizMultipleSelect } from './QuizMultipleSelect';

const meta = {
  title: 'entities/Quiz/QuizMultipleSelect',
  component: QuizMultipleSelect,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof QuizMultipleSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    item: {
      id: '1',
      type: QuizType.MULTIPLE_SELECT,
      question: 'What is your preferred language?',
      description: 'Choose language',
      options: [
        { value: 'English' },
        { value: 'French' },
        { value: 'German' },
        { value: 'Spanish' },
      ],
    },
  },
};
