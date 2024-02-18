import { useMemo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import { VStack } from '../../Stack';

import cls from './Select.module.scss';

export type SelectDirection = 'row' | 'column';

const directionClasses: Record<SelectDirection, string> = {
  row: cls.directionRow,
  column: cls.directionColumn,
};

export interface SelectOption {
  value: string;
  image?: string;
}

export interface SelectDefaultProps {
  className?: string;
  options?: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  direction?: SelectDirection;
}

interface SelectProps extends SelectDefaultProps {
  optionElement: (option: SelectOption) => JSX.Element;
}

export const Select = (props: SelectProps) => {
  const {
    optionElement,
    className,
    onChange,
    options,
    value,
    direction = 'column',
  } = props;

  const optionList = useMemo(
    () => options?.map((opt) => optionElement(opt)),
    [optionElement, options]
  );

  return (
    <VStack
      max
      gap="8"
      className={classNames('', {}, [className, directionClasses[direction]])}
    >
      {optionList}
    </VStack>
  );
};
