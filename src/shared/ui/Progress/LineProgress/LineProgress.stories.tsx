import type { Meta, StoryObj } from '@storybook/react';

import { LineProgress } from './LineProgress';

const meta = {
  title: 'shared/Progress/LineProgress',
  component: LineProgress,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof LineProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    total: 4,
    value: 1,
    height: '20px',
  },
};
