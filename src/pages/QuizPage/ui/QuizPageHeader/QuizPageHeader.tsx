import { FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { LineProgress } from '@/shared/ui/Progress';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import ArrowLeftIcon from '@/shared/assets/icons/arrow-left.svg';

import cls from './QuizPageHeader.module.scss';

interface QuizPageHeaderProps {
  className?: string;
  current: number;
  total: number;
}

export const QuizPageHeader: FC<QuizPageHeaderProps> = memo(
  (props: QuizPageHeaderProps) => {
    const { className, current, total } = props;
    const navigate = useNavigate();

    const onPrevPage = () => {
      navigate(-1);
    };

    return (
      <VStack
        gap="8"
        max
        className={classNames(cls.QuizPageHeader, {}, [className])}
      >
        <HStack max justify="center">
          <Button size="none" onClick={onPrevPage} theme="clear">
            <Icon Svg={ArrowLeftIcon} theme="transparent" strokeTheme="white" />
          </Button>
          <HStack className={cls.score}>
            <Text theme="primary" text={`${current}`} />
            <Text text={`/${total}`} />
          </HStack>
        </HStack>
        <LineProgress height="4px" total={total} value={current} />
      </VStack>
    );
  }
);
