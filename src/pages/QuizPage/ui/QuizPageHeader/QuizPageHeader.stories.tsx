import type { Meta, StoryObj } from '@storybook/react';

import { QuizPageHeader } from './QuizPageHeader';

const meta = {
  title: 'pages/QuizPage/QuizPageHeader',
  component: QuizPageHeader,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof QuizPageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    current: 1,
    total: 4,
  },
};

export const WithoutBackButton: Story = {
  args: {
    current: 1,
    total: 4,
    isShowBackButton: false,
  },
};
