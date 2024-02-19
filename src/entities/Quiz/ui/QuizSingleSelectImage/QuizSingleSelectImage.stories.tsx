import type { Meta, StoryObj } from '@storybook/react';

import StorybookImg from '@/shared/assets/test/storybook.png';

import { QuizType } from '../../model/consts/quizConsts';
import { QuizSingleSelectImage } from './QuizSingleSelectImage';

const meta = {
  title: 'entities/Quiz/QuizSingleSelectImage',
  component: QuizSingleSelectImage,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof QuizSingleSelectImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    item: {
      id: '1',
      type: QuizType.SINGLE_SELECT_IMAGE,
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
