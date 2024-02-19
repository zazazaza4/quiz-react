import { FC, memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { Page } from '@/widgets/Page';

import { getRouteEmail } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { CircleProgress } from '@/shared/ui/Progress';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import cls from './LoadingPage.module.scss';

interface LoadingPageProps {
  className?: string;
}

export const LoadingPage: FC<LoadingPageProps> = memo(
  (props: LoadingPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const [progress, setProgress] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
      const interval = setInterval(() => {
        if (progress < 100) {
          setProgress((prevProgress) => prevProgress + 1);
        } else {
          clearInterval(interval);
          navigate(getRouteEmail());
        }
      }, 50);

      return () => clearInterval(interval);
    }, [navigate, progress]);

    return (
      <Page className={classNames('', {}, [className])}>
        <VStack align="center" max gap="40">
          <CircleProgress size="252" progress={progress} animate />
          <Text className={cls.text} text={t('findingCollections')} />
        </VStack>
      </Page>
    );
  }
);
