import { FC, memo, useCallback, useState } from 'react';

import { Button } from '@/shared/ui/Button';
import { MultipleSelect } from '@/shared/ui/Select';
import { VStack } from '@/shared/ui/Stack';

import { Quiz } from '../../model/types/quiz';

interface QuizMultipleSelectProps {
  className?: string;
  item: Quiz;
  onNext?: () => void;
}

export const QuizMultipleSelect: FC<QuizMultipleSelectProps> = memo(
  (props: QuizMultipleSelectProps) => {
    const { className, item, onNext } = props;
    const { options } = item;

    const [selectedOption, setSelectedOption] = useState<string | undefined>(
      undefined
    );

    const onChangeHandler = useCallback((value: string) => {
      setSelectedOption(value);
    }, []);

    const onNextHandle = () => {
      onNext?.();
    };

    return (
      <VStack max align="center" justify="between" gap="40">
        <MultipleSelect
          className={className}
          options={options}
          value={selectedOption}
          onChange={onChangeHandler}
        />
        <Button onClick={onNextHandle}>Next</Button>
      </VStack>
    );
  }
);
