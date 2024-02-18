import { ChangeEventHandler, useCallback } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import { AppImage } from '../../AppImage';
import { HStack } from '../../Stack';
import { Text } from '../../Text';
import { Select, SelectDefaultProps, SelectOption } from '../Select/Select';

import cls from './SingleSelect.module.scss';

export const SingleSelect = (props: SelectDefaultProps) => {
  const { value, onChange, direction } = props;

  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      const newValue = event.target.value;
      onChange?.(newValue);
    },
    [onChange]
  );

  const renderOptionElement = useCallback(
    (option: SelectOption) => (
      <HStack
        as="label"
        className={classNames(
          cls.option,
          {
            [cls.directionRow]: direction === 'row',
          },
          []
        )}
        key={option.value}
      >
        <input
          className={cls.input}
          name="radio"
          type="radio"
          value={option.value}
          checked={value === option.value}
          onChange={onChangeHandler}
        />
        {option.image && <AppImage src={option.image} alt={option.value} />}
        <Text text={option.value} />
      </HStack>
    ),
    [direction, onChangeHandler, value]
  );

  return <Select optionElement={renderOptionElement} {...props} />;
};
