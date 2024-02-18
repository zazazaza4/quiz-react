import { Navigate } from 'react-router-dom';

import { EmailPage } from '@/pages/EmailPage';
import { LoadingPage } from '@/pages/LoadingPage';
import { QuizPage } from '@/pages/QuizPage';
import { ResultPage } from '@/pages/ResultPage';

import {
  AppRoutes,
  getRouteEmail,
  getRouteLoading,
  getRouteQuiz,
  getRouteResult,
} from '@/shared/const/router';
import { AppRoutesProps } from '@/shared/types/router';

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.EMAIL]: {
    path: getRouteEmail(),
    element: <EmailPage />,
  },
  [AppRoutes.QUIZ]: {
    path: getRouteQuiz(':id'),
    element: <QuizPage />,
  },
  [AppRoutes.RESULT]: {
    path: getRouteResult(),
    element: <ResultPage />,
  },
  [AppRoutes.LOADING]: {
    path: getRouteLoading(),
    element: <LoadingPage />,
  },

  // last
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <Navigate replace to={getRouteQuiz('1')} />,
  },
};
