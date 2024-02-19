import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Page } from '@/widgets/Page';

import { DownloadAnswersButton } from '@/features/DownloadAnswers';

import { Answer, answersActions, getAnswersList } from '@/entities/Answer';
import { getUserEmail, userActions } from '@/entities/User';

import { getRouteQuiz } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AppImage } from '@/shared/ui/AppImage';
import { Button } from '@/shared/ui/Button';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import CheckmarkImg from '@/shared/assets/images/checkmark.png';

import cls from './ResultPage.module.scss';

interface ResultPageProps {
  className?: string;
}

const ResultPage: FC<ResultPageProps> = memo((props: ResultPageProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const answers = useSelector(getAnswersList);
  const userEmail = useSelector(getUserEmail);
  const navigate = useNavigate();

  const onRetakeQuiz = () => {
    dispatch(userActions.reset());
    dispatch(answersActions.clearAnswers());

    navigate(getRouteQuiz('1'));
  };

  const answersList: Answer[] = [
    ...answers,
    {
      answer: userEmail,
      order: answers.length + 1,
      title: 'Email',
      type: 'email',
    },
  ];

  return (
    <Page
      data-testid="ResultPage"
      className={classNames(cls.ResultPage, {}, [className])}
    >
      <VStack align="center" className="container">
        <Text size="size_l" font="secondary" title={t('thankYou')} />
        <Text text={t('forSupportingUs')} />
        <AppImage className={cls.image} src={CheckmarkImg} alt="Checkmark" />
        <DownloadAnswersButton answers={answersList} className={cls.download} />
        <Button onClick={onRetakeQuiz}>{t('retakeQuiz')}</Button>
      </VStack>
    </Page>
  );
});

export default ResultPage;
