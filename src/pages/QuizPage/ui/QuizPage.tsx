import { FC, memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Page } from '@/widgets/Page';

import { fetchQuizList, getQuizIsLoading, getQuizTotal } from '@/entities/Quiz';

import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Skeleton } from '@/shared/ui/Skeleton';
import { VStack } from '@/shared/ui/Stack';

import { QuizPageContent } from './QuizPageContent/QuizPageContent';
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
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchQuizList());
    }
  }, [dispatch]);

  if (!id) {
    return null;
  }

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
        <QuizPageHeader
          current={Number(id)}
          total={total}
          isShowBackButton={id !== '1'}
        />
        <QuizPageContent className={cls.content} quizId={id} total={total} />
      </VStack>
    </Page>
  );
});

export default QuizPage;
