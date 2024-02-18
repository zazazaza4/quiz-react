import { FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';

import { Page } from '@/widgets/Page';

import { DownloadAnswersButton } from '@/features/DownloadAnswers';

import { getRouteQuiz } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
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
  const navigate = useNavigate();

  const onRetakeQuiz = () => {
    navigate(getRouteQuiz('1'));
  };

  return (
    <Page className={classNames(cls.ResultPage, {}, [className])}>
      <VStack align="center" className="container">
        <Text size="size_l" font="secondary" title="Thank you" />
        <Text text="for supporting us and passing quiz" />
        <AppImage className={cls.image} src={CheckmarkImg} alt="Checkmark" />
        <DownloadAnswersButton answers={[]} className={cls.download} />
        <Button onClick={onRetakeQuiz}>Retake quiz</Button>
      </VStack>
    </Page>
  );
});

export default ResultPage;
