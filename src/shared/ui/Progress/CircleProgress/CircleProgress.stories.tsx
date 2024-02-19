import type { Meta, StoryObj } from '@storybook/react';

import { CircleProgress } from './CircleProgress';

const meta = {
  title: 'shared/Progress/CircleProgress',
  component: CircleProgress,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CircleProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    progress: 10,
  },
};
