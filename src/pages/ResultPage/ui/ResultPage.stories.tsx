import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import ResultPage from './ResultPage';

const meta = {
  title: 'pages/ResultPage',
  component: ResultPage,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ResultPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
Primary.decorators = [StoreDecorator({})];
