import type { Meta, StoryObj } from '@storybook/react';

import StorybookImg from '@/shared/assets/test/storybook.png';

import { QuizType } from '../../model/consts/quizConsts';
import { QuizBubbleSelect } from './QuizBubbleSelect';

const meta = {
  title: 'entities/Quiz/QuizBubbleSelect',
  component: QuizBubbleSelect,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof QuizBubbleSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    item: {
      id: '1',
      type: QuizType.BUBBLE,
      question: 'What is your preferred language?',
      description: 'Choose language',
      options: [
        { value: 'English', image: StorybookImg },
        { value: 'French', image: StorybookImg },
        { value: 'German', image: StorybookImg },
        { value: 'Spanish', image: StorybookImg },
      ],
    },
  },
};
