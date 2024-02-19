import { ChangeEventHandler, useCallback } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import { AppImage } from '../../AppImage';
import { Skeleton } from '../../Skeleton';
import { VStack } from '../../Stack';
import { Text } from '../../Text';
import { Select, SelectDefaultProps, SelectOption } from '../Select/Select';

import cls from './Bubble.module.scss';

export const Bubble = (props: SelectDefaultProps<string[]>) => {
  const { value = [], onChange, className } = props;

  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      const selectedValue = event.target.value;
      const isChecked = event.target.checked;

      if (isChecked) {
        onChange?.([...value, selectedValue]);
      } else {
        onChange?.(value.filter((val) => val !== selectedValue));
      }
    },
    [onChange, value]
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
            name="checkbox"
            type="checkbox"
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
    [onChangeHandler]
  );

  return (
    <Select
      {...props}
      className={classNames(cls.Bubble, {}, [className])}
      optionElement={renderOptionElement}
    />
  );
};
