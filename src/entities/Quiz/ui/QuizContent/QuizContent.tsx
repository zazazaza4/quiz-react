import { FC, memo, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { StateSchema } from '@/app/providers/StoreProvider';

import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import { QuizType } from '../../model/consts/quizConsts';
import { getQuizList } from '../../model/slice/quizSlice';
import { QuizBubbleSelect } from '../QuizBubbleSelect/QuizBubbleSelect';
import { QuizMultipleSelect } from '../QuizMultipleSelect/QuizMultipleSelect';
import { QuizSingleSelect } from '../QuizSingleSelect/QuizSingleSelect';
import { QuizSingleSelectImage } from '../QuizSingleSelectImage/QuizSingleSelectImage';

import cls from './QuizContent.module.scss';

interface QuizContentProps {
  className?: string;
  quizId: string;
  onNext: (nextId?: number) => void;
}

export const QuizContent: FC<QuizContentProps> = memo(
  (props: QuizContentProps) => {
    const { className, quizId, onNext } = props;
    const quizItem = useSelector((state: StateSchema) =>
      getQuizList.selectById(state, quizId)
    );

    const content = useMemo(() => {
      switch (quizItem?.type) {
        case QuizType.SINGLE_SELECT:
          return <QuizSingleSelect item={quizItem} onNext={onNext} />;
        case QuizType.SINGLE_SELECT_IMAGE:
          return <QuizSingleSelectImage item={quizItem} onNext={onNext} />;
        case QuizType.BUBBLE:
          return <QuizBubbleSelect item={quizItem} onNext={onNext} />;
        case QuizType.MULTIPLE_SELECT:
          return <QuizMultipleSelect item={quizItem} onNext={onNext} />;
        default:
          return null;
      }
    }, [onNext, quizItem]);

    return (
      <VStack
        max
        align="center"
        className={classNames(cls.QuizContent, {}, [className])}
      >
        <VStack gap="16" className={cls.question} align="center">
          <Text align="center" title={quizItem?.question} />
          {quizItem?.description && (
            <Text align="center" theme="gray" text={quizItem?.description} />
          )}
        </VStack>
        <VStack className={cls.content} max>
          {content}
        </VStack>
      </VStack>
    );
  }
);
