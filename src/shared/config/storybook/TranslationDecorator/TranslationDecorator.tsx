import { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Decorator } from '@storybook/react';

import i18n from '../../i18n/i18n';

export const TranslationDecorator: Decorator = (Story) => (
  <Suspense fallback="">
    <I18nextProvider i18n={i18n}>
      <Story />
    </I18nextProvider>
  </Suspense>
);
