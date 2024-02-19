import { FC, memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@/shared/ui/Button';
import { Bubble } from '@/shared/ui/Select';
import { VStack } from '@/shared/ui/Stack';

import { Quiz } from '../../model/types/quiz';

interface QuizBubbleSelectProps {
  className?: string;
  item: Quiz;
  onNext: (value: string, nextId?: number) => void;
}

export const QuizBubbleSelect: FC<QuizBubbleSelectProps> = memo(
  (props: QuizBubbleSelectProps) => {
    const { className, item, onNext } = props;
    const { t } = useTranslation();
    const { options } = item;

    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    const onChangeHandler = useCallback((value: string[]) => {
      setSelectedOptions(value);
    }, []);

    const onNextHandle = () => {
      onNext?.(selectedOptions.join(','));
    };

    return (
      <VStack max align="center" justify="between" gap="40">
        <Bubble
          className={className}
          options={options}
          value={selectedOptions}
          onChange={onChangeHandler}
        />
        <Button onClick={onNextHandle}>{t('buttons.next')}</Button>
      </VStack>
    );
  }
);
