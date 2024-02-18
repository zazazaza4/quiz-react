import { FC, memo } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { Page } from '@/widgets/Page';

import { getQuizIsLoading, getQuizTotal, QuizContent } from '@/entities/Quiz';

import { getRouteLoading, getRouteQuiz } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Skeleton } from '@/shared/ui/Skeleton';
import { VStack } from '@/shared/ui/Stack';

import { QuizPageHeader } from './QuizPageHeader/QuizPageHeader';

import cls from './QuizPage.module.scss';

interface QuizPageProps {
  className?: string;
}

const QuizPage: FC<QuizPageProps> = memo((props: QuizPageProps) => {
  const { className } = props;
  const { id } = useParams<{ id: string }>();
  const total = useSelector(getQuizTotal);
  const isLoading = useSelector(getQuizIsLoading);
  const navigate = useNavigate();

  if (!id) {
    return null;
  }

  const onNext = (nextId: number = 1) => {
    const newId = Number(id) + nextId;

    if (newId <= total) {
      navigate(getRouteQuiz(String(newId)));
    } else {
      navigate(getRouteLoading());
    }
  };

  if (isLoading) {
    return (
      <Page className={classNames(cls.QuizPage, {}, [className])}>
        <VStack gap="40" max className="container" align="center">
          <Skeleton borderRadius="8px" width="100%" height={30} />
          <Skeleton borderRadius="8px" width="80%" height={115} />
          <VStack max gap="8">
            <Skeleton borderRadius="8px" width="100%" height={60} />
            <Skeleton borderRadius="8px" width="100%" height={60} />
            <Skeleton borderRadius="8px" width="100%" height={60} />
            <Skeleton borderRadius="8px" width="100%" height={60} />
          </VStack>
        </VStack>
      </Page>
    );
  }

  return (
    <Page className={classNames(cls.QuizPage, {}, [className])}>
      <VStack max className="container" align="center">
        <QuizPageHeader current={Number(id)} total={total} />
        <QuizContent className={cls.contnet} quizId={id} onNext={onNext} />
      </VStack>
    </Page>
  );
});

export default QuizPage;