import { FC, memo, useCallback, useState } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { SingleSelect } from '@/shared/ui/Select';

import { Quiz } from '../../model/types/quiz';

import cls from './QuizSingleSelectImage.module.scss';

interface QuizSingleSelectImageProps {
  className?: string;
  item: Quiz;
  onNext: (value: string, nextId?: number) => void;
}

export const QuizSingleSelectImage: FC<QuizSingleSelectImageProps> = memo(
  (props: QuizSingleSelectImageProps) => {
    const { className, item, onNext } = props;
    const { options } = item;

    const [selectedOption, setSelectedOption] = useState<string | undefined>(
      undefined
    );

    const onChangeHandler = useCallback(
      (value: string) => {
        setSelectedOption(value);
        onNext?.(value);
      },
      [onNext]
    );

    return (
      <SingleSelect
        direction="row"
        className={classNames(cls.QuizSingleSelectImage, {}, [className])}
        options={options}
        value={selectedOption}
        onChange={onChangeHandler}
      />
    );
  }
);
