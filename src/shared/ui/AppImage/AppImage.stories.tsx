import type { Meta, StoryObj } from '@storybook/react';

import { AppImage } from './AppImage';

const meta = {
  title: 'shared/AppImage',
  component: AppImage,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof AppImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
