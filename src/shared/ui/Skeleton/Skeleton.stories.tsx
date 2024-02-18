import type { Meta, StoryObj } from '@storybook/react';

import { Skeleton } from './Skeleton';

const meta = {
  title: 'shared/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    width: '100%',
    height: '200px',
  },
};

export const Circle: Story = {
  args: {
    borderRadius: '50%',
    width: 100,
    height: 100,
  },
};
