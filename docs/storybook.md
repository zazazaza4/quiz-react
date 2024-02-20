## Storybook

У проекті кожен компонент описується сторі-кейсами.

Файл із сторікейсами створюється поруч з компонентом з розширенням .stories.tsx.

Запустити Storybook можна за допомогою команди:

- `npm run storybook`

Приклад:

```typescript jsx
import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonSize, ButtonTheme } from './Button';

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
  },
};

export const Clear: Story = {
  args: {
    children: 'Test',
    theme: ButtonTheme.CLEAR,
  },
};
```
