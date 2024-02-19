import type { Meta, StoryObj } from '@storybook/react';

import StorybookImg from '@/shared/assets/test/storybook.png';

import { QuizType } from '../../model/consts/quizConsts';
import { QuizContent } from './QuizContent';

const meta = {
  title: 'entities/Quiz/QuizContent',
  component: QuizContent,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof QuizContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
  args: {
    quiz: {
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

export const Multiple: Story = {
  args: {
    quiz: {
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

export const Bubble: Story = {
  args: {
    quiz: {
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

export const SingleImage: Story = {
  args: {
    quiz: {
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
