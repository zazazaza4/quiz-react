import type { Meta, StoryObj } from '@storybook/react';

import { DownloadAnswersButton } from './DownloadAnswersButton';

const meta = {
  title: 'features/DownloadAnswersButton',
  component: DownloadAnswersButton,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof DownloadAnswersButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    answers: [],
  },
};
