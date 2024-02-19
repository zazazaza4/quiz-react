import { ChangeEventHandler, useCallback } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import { AppImage } from '../../AppImage';
import { Skeleton } from '../../Skeleton';
import { VStack } from '../../Stack';
import { Text } from '../../Text';
import { Select, SelectDefaultProps, SelectOption } from '../Select/Select';

import cls from './Bubble.module.scss';

interface BubbleProps extends SelectDefaultProps<string[]> {
  maxItems?: number;
}

export const Bubble = (props: BubbleProps) => {
  const { value = [], onChange, className, maxItems = 3 } = props;

  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      const selectedValue = event.target.value;
      const isChecked = event.target.checked;
      const selectedCount = value.length;

      if (isChecked && maxItems > selectedCount) {
        onChange?.([...value, selectedValue]);
      } else if (!isChecked) {
        onChange?.(value.filter((val) => val !== selectedValue));
      }
    },
    [maxItems, onChange, value]
  );

  const renderOptionElement = useCallback(
    (option: SelectOption) => (
      <VStack
        max
        align="center"
        className={cls.wrapperOption}
        key={option.value}
      >
        <VStack
          as="label"
          justify="center"
          align="center"
          className={cls.option}
        >
          <input
            className={cls.input}
            name={option.value}
            type="checkbox"
            checked={value.includes(option.value)}
            value={option.value}
            onChange={onChangeHandler}
          />
          {option.image && (
            <AppImage
              src={option.image}
              className={cls.image}
              alt={option.value}
              fallback={<Skeleton height={25} width={25} borderRadius="50%" />}
            />
          )}
          <Text align="center" className={cls.text} text={option.value} />
        </VStack>
      </VStack>
    ),
    [onChangeHandler, value]
  );

  return (
    <Select
      {...props}
      className={classNames(cls.Bubble, {}, [className])}
      optionElement={renderOptionElement}
    />
  );
};
