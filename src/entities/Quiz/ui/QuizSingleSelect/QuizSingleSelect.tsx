import { FC, memo, useCallback, useState } from 'react';

import { SingleSelect } from '@/shared/ui/Select';

import { Quiz } from '../../model/types/quiz';

interface QuizSingleSelectProps {
  className?: string;
  item: Quiz;
  onNext?: () => void;
}

export const QuizSingleSelect: FC<QuizSingleSelectProps> = memo(
  (props: QuizSingleSelectProps) => {
    const { className, item, onNext } = props;
    const { options } = item;

    const [selectedOption, setSelectedOption] = useState<string | undefined>(
      undefined
    );

    const onChangeHandler = useCallback(
      (value: string) => {
        setSelectedOption(value);
        onNext?.();
      },
      [onNext]
    );

    return (
      <SingleSelect
        className={className}
        options={options}
        value={selectedOption}
        onChange={onChangeHandler}
      />
    );
  }
);
