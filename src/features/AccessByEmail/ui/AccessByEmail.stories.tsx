import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { AccessByEmail } from './AccessByEmail';

const meta = {
  title: 'features/AccessByEmail',
  component: AccessByEmail,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof AccessByEmail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
Primary.decorators = [StoreDecorator({})];
