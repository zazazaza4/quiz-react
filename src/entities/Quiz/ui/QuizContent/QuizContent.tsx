import { useCallback, useMemo, useState } from 'react';
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

interface QuizContentProps<T> {
  className?: string;
  quizId: string;
  onNext: (value: T, nextId?: number) => void;
}

export const QuizContent = <T extends any>(props: QuizContentProps<T>) => {
  const { className, quizId, onNext } = props;
  const quizItem = useSelector((state: StateSchema) =>
    getQuizList.selectById(state, quizId)
  );

  const [isVisible, setIsVisible] = useState(true);

  const handleNext = useCallback(
    (value: string, nextId?: number) => {
      setIsVisible(false);
      setTimeout(() => {
        const result = {
          order: quizItem?.id,
          title: quizItem?.question,
          type: quizItem?.type,
          answer: value,
        } as T;

        onNext(result, nextId);
        setIsVisible(true);
      }, 500);
    },
    [onNext, quizItem?.id, quizItem?.question, quizItem?.type]
  );

  const content = useMemo(() => {
    switch (quizItem?.type) {
      case QuizType.SINGLE_SELECT:
        return <QuizSingleSelect item={quizItem} onNext={handleNext} />;
      case QuizType.SINGLE_SELECT_IMAGE:
        return <QuizSingleSelectImage item={quizItem} onNext={handleNext} />;
      case QuizType.BUBBLE:
        return <QuizBubbleSelect item={quizItem} onNext={handleNext} />;
      case QuizType.MULTIPLE_SELECT:
        return <QuizMultipleSelect item={quizItem} onNext={handleNext} />;
      default:
        return null;
    }
  }, [handleNext, quizItem]);

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
      <VStack
        className={classNames(
          cls.content,
          {
            [cls.fadeOut]: !isVisible,
          },
          []
        )}
        max
      >
        {content}
      </VStack>
    </VStack>
  );
};
