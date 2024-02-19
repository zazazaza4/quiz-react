import type { Meta, StoryObj } from '@storybook/react';

import { QuizType } from '../../model/consts/quizConsts';
import { QuizSingleSelect } from './QuizSingleSelect';

const meta = {
  title: 'entities/Quiz/QuizSingleSelect',
  component: QuizSingleSelect,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof QuizSingleSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    item: {
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
    },
  },
};
