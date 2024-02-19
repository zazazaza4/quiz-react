import { FC, memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@/shared/ui/Button';
import { MultipleSelect } from '@/shared/ui/Select';
import { VStack } from '@/shared/ui/Stack';

import { Quiz } from '../../model/types/quiz';

interface QuizMultipleSelectProps {
  className?: string;
  item: Quiz;
  onNext: (value: string, nextId?: number) => void;
}

export const QuizMultipleSelect: FC<QuizMultipleSelectProps> = memo(
  (props: QuizMultipleSelectProps) => {
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
        <MultipleSelect
          selectedValues={selectedOptions}
          className={className}
          options={options}
          value={selectedOptions}
          onChange={onChangeHandler}
        />
        <Button isDisabled={selectedOptions.length < 1} onClick={onNextHandle}>
          {t('buttons.next')}
        </Button>
      </VStack>
    );
  }
);
