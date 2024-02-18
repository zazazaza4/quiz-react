import { Suspense, useEffect } from 'react';

import { fetchQuizList } from '@/entities/Quiz';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Loader } from '@/shared/ui/Loader';

import { AppRouter } from './providers/router';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchQuizList());
  }, [dispatch]);

  return (
    <Suspense fallback={<Loader />}>
      <AppRouter />
    </Suspense>
  );
};
export default App;
