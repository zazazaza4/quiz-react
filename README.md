### Скрипти

- `npm run start` - Запускає фронтенд проект на вебпак dev сервері.
- `npm run start:vite` - Запускає фронтенд проект на vite.
- `npm run start:dev:server` - Запускає сервер для розробки на JSON Server.
- `npm run build:prod` - Збирає проект в продакшен режимі.
- `npm run build:dev` - Збирає проект в режимі розробки (не мініфіковано).
- `npm run lint:ts` - Перевіряє ts файли лінтером ESLint.
- `npm run lint:ts:fix` - Виправляє ts файли лінтером ESLint.
- `npm run lint:scss` - Перевіряє scss файли стайл лінтером Stylelint.
- `npm run lint:scss:fix` - Виправляє scss файли стайл лінтером Stylelint.
- `npm run prettier` - Форматує файли за допомогою Prettier.
- `npm run test:unit` - Запускає юніт-тести з Jest.
- `npm run test:ui` - Запускає UI тести за допомогою Loki.
- `npm run test:ui:ok` - Підтверджує результати UI тестів за допомогою Loki.
- `npm run test:ui:ci` - Запускає UI тести у CI режимі з використанням Loki та Storybook.
- `npm run test:ui:report` - Генерує звіти з результатами UI тестів.
- `npm run test:ui:json` - Генерує JSON звіт з результатами UI тестів.
- `npm run test:ui:html` - Генерує HTML звіт з результатами UI тестів.
- `npm run storybook` - Запускає Storybook на порту 6006.
- `npm run storybook:build` - Збирає Storybook у вигляді готового бандлу.
- `npm run postinstall` - Виконує скрипт для очистки кешу після встановлення пакетів.

---

### Архітектура проекту

Проект використовує методологію Feature Sliced Design.

Документація для Feature Sliced Design - [Feature Sliced Design](https://feature-sliced.design/docs/get-started/tutorial)

---

## Робота з перекладами

У проекті використовується бібліотека i18next для роботи з перекладами.
Файли з перекладами зберігаються в папці public/locales.

Для зручної роботи рекомендуємо встановити плагін для webstorm/vscode.

Документація i18next - [https://react.i18next.com/](https://react.i18next.com/)

---

## Тести

У проекті використовуються 3 типи тестів:

1. Звичайні unit тести з Jest - `npm run test:unit`
2. Тести компонент з React Testing Library - `npm run test:unit`
3. Тестування за допомогою знімків з Loki - `npm run test:ui`

Детальніше про тести - [документація щодо тестування](/docs/tests.md)

---

### Лінтування

Проект використовує ESLint для перевірки коду TypeScript і Stylelint для перевірки файлів стилів.

### Запуск лінтерів

- `npm run lint:ts` - Перевірити ts файли лінтером
- `npm run lint:ts:fix` - Виправити ts файли лінтером
- `npm run lint:scss` - Перевірити scss файли стайл лінтером
- `npm run lint:scss:fix` - Виправити scss файли стайл лінтером

---

### Storybook

У проекті для кожного компонента описуються сторі-кейси.
Запити на сервер мокуються за допомогою storybook-addon-mock.

Файл із сторі-кейсами створюється поруч з компонентом з розширенням .stories.tsx

Запустити сторібук можна командою:

- `npm run storybook`

Детальніше про [Storybook](/docs/storybook.md)

Приклад:

```typescript jsx
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
```

---

### Налаштування проекту

Для розробки проект має 2 конфігурації:

1. Webpack - ./config/build
2. Vite - vite.config.ts

Обидва збірники адаптовані для основних функцій застосунка.

Всі налаштування зберігаються в /config:

- /config/babel - babel
- /config/build - конфігурація webpack
- /config/jest - конфігурація середовища тестування

---

### CI-пайплайн

Конфігурація дій GitHub розташована в /.github/workflows.
У CI виконуються всі види тестів, збірка проекту та сторібука, лінтинг.

Також генерується звіт для unit-тестів та скріншотних тестів, який можна переглянути за посиланням: [https://zazazaza4.github.io/quiz-react/](https://zazazaza4.github.io/quiz-react/).

---

### Робота з даними

Взаємодія з даними здійснюється за допомогою Redux Toolkit.
За можливістю, перевикористовувані сутності рекомендується нормалізувати за допомогою EntityAdapter.

Для асинхронного підключення редукторів (щоб не тягнути їх в загальний бандл) використовується
[DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx)

---

### Entities

- [Answer](/src/entities/Answer)
- [Quiz](/src/entities/Quiz)
- [User](/src/entities/User)

#### [Документація з Entities](/docs/entities.md)

### Features

- [AccessByEmail](/src/features/AccessByEmail)
- [DownloadAnswers](/src/features/DownloadAnswers)
- [LangSwitcher](/src/features/LangSwitcher)

#### [Документація з Features](/docs/features.md)

### Widgets

- [Page](/src/widgets/Page)
- [PageError](/src/widgets/PageError)
- [PageLoader](/src/widgets/PageLoader)

#### [Документація з Widgets](/docs/widgets.md)

### Pages

- [EmailPage](/src/pages/EmailPage)
- [LoadingPage](/src/pages/LoadingPage)
- [QuizPage](/src/pages/QuizPage)
- [ResultPage](/src/pages/ResultPage)

### Shared

- [API](/src/shared/api)
- [Assets](/src/shared/assets)
- [Config](/src/shared/config)
- [Const](/src/shared/const)
- [Lib](/src/shared/lib)
- [Types](/src/shared/types)
- [UI](/src/shared/ui)

#### [Документація з Shared](/docs/shared.md)
