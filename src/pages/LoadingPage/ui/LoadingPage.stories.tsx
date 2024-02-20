import type { Meta, StoryObj } from '@storybook/react';

import { LoadingPage } from './LoadingPage';

const meta = {
  title: 'pages/LoadingPage',
  component: LoadingPage,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof LoadingPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
