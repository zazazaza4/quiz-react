import { useCallback, useMemo, useState } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import { QuizType } from '../../model/consts/quizConsts';
import { Quiz } from '../../model/types/quiz';
import { QuizBubbleSelect } from '../QuizBubbleSelect/QuizBubbleSelect';
import { QuizMultipleSelect } from '../QuizMultipleSelect/QuizMultipleSelect';
import { QuizSingleSelect } from '../QuizSingleSelect/QuizSingleSelect';
import { QuizSingleSelectImage } from '../QuizSingleSelectImage/QuizSingleSelectImage';

import cls from './QuizContent.module.scss';

interface QuizContentProps<T> {
  className?: string;
  quiz: Quiz;
  onNext: (value: T, nextId?: number) => void;
}

export const QuizContent = <T extends any>(props: QuizContentProps<T>) => {
  const { className, quiz, onNext } = props;

  const [isVisible, setIsVisible] = useState(true);

  const handleNext = useCallback(
    (value: string, nextId?: number) => {
      setIsVisible(false);
      setTimeout(() => {
        const result = {
          order: quiz?.id,
          title: quiz?.question,
          type: quiz?.type,
          answer: value,
        } as T;

        onNext(result, nextId);
        setIsVisible(true);
      }, 500);
    },
    [onNext, quiz?.id, quiz?.question, quiz?.type]
  );

  const content = useMemo(() => {
    switch (quiz?.type) {
      case QuizType.SINGLE_SELECT:
        return <QuizSingleSelect item={quiz} onNext={handleNext} />;
      case QuizType.SINGLE_SELECT_IMAGE:
        return <QuizSingleSelectImage item={quiz} onNext={handleNext} />;
      case QuizType.BUBBLE:
        return <QuizBubbleSelect item={quiz} onNext={handleNext} />;
      case QuizType.MULTIPLE_SELECT:
        return <QuizMultipleSelect item={quiz} onNext={handleNext} />;
      default:
        return null;
    }
  }, [handleNext, quiz]);

  return (
    <VStack
      max
      align="center"
      className={classNames(cls.QuizContent, {}, [className])}
    >
      <VStack gap="16" className={cls.question} align="center">
        <Text align="center" title={quiz?.question} />
        {quiz?.description && (
          <Text align="center" theme="gray" text={quiz?.description} />
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
