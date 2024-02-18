### Скрипти

- `npm run start` - Запустити фронтенд проект на вебпак dev сервері
- `npm run start:vite` - Запустити фронтенд проект на vite
- `npm run build:prod` - Зібрати в продакшен режимі
- `npm run build:dev` - Зібрати в режимі розробки (не мініфіковано)
- `npm run lint:ts` - Перевірити ts файли лінтером
- `npm run lint:ts:fix` - Виправити ts файли лінтером
- `npm run lint:scss` - Перевірити scss файли стайл лінтером
- `npm run lint:scss:fix` - Виправити scss файли стайл лінтером
- `npm run test:unit` - Запустити юніт-тести з Jest
- `npm run generate:slice` - Скрипт для генерації FSD slice'ів

---

### Архітектура проекту

Проект використовує методологію Feature Sliced Design.

Документація для Feature Sliced Design - [Feature Sliced Design](https://feature-sliced.design/docs/get-started/tutorial)

---

### Тести

Проект використовує 4 типи тестів:

1. Звичайні юніт-тести з Jest - `npm run test:unit`
2. Тести компонентів з React Testing Library - `npm run test:unit`

Докладніше про тести - [Документація з тестування](/docs/tests.md)

---

### Лінтування

Проект використовує ESLint для перевірки коду TypeScript і Stylelint для перевірки файлів стилів.

### Запуск лінтерів

- `npm run lint:ts` - Перевірити ts файли лінтером
- `npm run lint:ts:fix` - Виправити ts файли лінтером
- `npm run lint:scss` - Перевірити scss файли стайл лінтером
- `npm run lint:scss:fix` - Виправити scss файли стайл лінтером

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
