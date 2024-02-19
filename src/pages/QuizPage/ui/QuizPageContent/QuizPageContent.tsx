import { FC, memo } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { StateSchema } from '@/app/providers/StoreProvider';

import { LangSwitcher } from '@/features/LangSwitcher';

import { Answer, answersActions } from '@/entities/Answer';
import { fetchQuizList, getQuizList, QuizContent } from '@/entities/Quiz';

import {
  getRouteLoading,
  getRouteQuiz,
  getRouteQuizLang,
} from '@/shared/const/router';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

interface QuizPageContentProps {
  className?: string;
  total: number;
  quizId: string;
}

export const QuizPageContent: FC<QuizPageContentProps> = memo(
  (props: QuizPageContentProps) => {
    const { className, quizId, total } = props;
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const location = useLocation();
    const quiz = useSelector((state: StateSchema) =>
      getQuizList.selectById(state, quizId)
    );
    const isLangSwitcherRoute = location.pathname === getRouteQuizLang();

    const onNext = (answer: Answer, nextId: number = 1) => {
      const newId = Number(quizId) + nextId;
      dispatch(answersActions.addAnswer(answer));

      if (newId <= total) {
        navigate(getRouteQuiz(String(newId)));
      } else {
        navigate(getRouteLoading());
      }
    };

    const onSuccessChangeLang = (answer: Answer) => {
      dispatch(fetchQuizList());
      onNext(answer);
    };

    if (!quiz) {
      return null;
    }

    if (isLangSwitcherRoute) {
      return <LangSwitcher onSuccess={onSuccessChangeLang} />;
    }

    return <QuizContent className={className} quiz={quiz} onNext={onNext} />;
  }
);
