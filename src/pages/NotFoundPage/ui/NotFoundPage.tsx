import { FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';

import { Page } from '@/widgets/Page';

import { getRouteQuiz } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage: FC<NotFoundPageProps> = memo(
  (props: NotFoundPageProps) => {
    const { className } = props;
    const navigate = useNavigate();

    const onRedirectQuiz = () => {
      navigate(getRouteQuiz('1'));
    };

    return (
      <Page
        data-testid="NotFoundPage"
        className={classNames('', {}, [className])}
      >
        <VStack align="center" max gap="40">
          <Text text="404" />
          <Text text="Not Found" />
          <Button onClick={onRedirectQuiz}>Go to Quiz</Button>
        </VStack>
      </Page>
    );
  }
);
