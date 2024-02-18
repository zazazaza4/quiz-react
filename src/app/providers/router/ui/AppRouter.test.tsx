import { screen, waitFor } from '@testing-library/react';

import { getRouteEmail } from '@/shared/const/router';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';

import { AppRouter } from './AppRouter';

describe('app/router/AppRouter', () => {
  test('email page', async () => {
    componentRender(<AppRouter />, {
      route: getRouteEmail(),
    });

    await waitFor(async () => {
      const page = await screen.findByTestId('EmailPage');
      expect(page).toBeInTheDocument();
    });
  });

  test('not found', async () => {
    componentRender(<AppRouter />, {
      route: '/afsfsfsfdsfsdfsfdsd',
    });

    await waitFor(() => {
      const page = screen.getByTestId('NotFoundPage');
      expect(page).toBeInTheDocument();
    });
  });
});
