import { Suspense } from 'react';

import { Loader } from '@/shared/ui/Loader';

import { AppRouter } from './providers/router';

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <AppRouter />
    </Suspense>
  );
};
export default App;
