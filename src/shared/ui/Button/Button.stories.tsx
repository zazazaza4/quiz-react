import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Test',
    theme: 'primary',
  },
};

export const Clear: Story = {
  args: {
    children: 'Test',
    theme: 'clear',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Test',
    isDisabled: true,
  },
};
