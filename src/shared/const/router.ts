export enum AppRoutes {
  EMAIL = 'email',
  QUIZ = 'quiz',
  RESULT = 'result',
  LOADING = 'loading',

  NOT_FOUND = 'not_found',
}

export const getRouteEmail = () => '/email';
export const getRouteQuiz = (id: string) => `/quiz/${id}`;
export const getRouteQuizLang = () => getRouteQuiz('1');
export const getRouteResult = () => `/result`;
export const getRouteLoading = () => `/loading`;
