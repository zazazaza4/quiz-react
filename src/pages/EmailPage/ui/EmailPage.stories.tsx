import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import EmailPage from './EmailPage';

const meta = {
  title: 'pages/EmailPage',
  component: EmailPage,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof EmailPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
Primary.decorators = [StoreDecorator({})];
