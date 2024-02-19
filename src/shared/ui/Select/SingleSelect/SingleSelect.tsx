import { ChangeEventHandler, useCallback } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import { AppImage } from '../../AppImage';
import { Skeleton } from '../../Skeleton';
import { HStack } from '../../Stack';
import { Text } from '../../Text';
import { Select, SelectDefaultProps, SelectOption } from '../Select/Select';

import cls from './SingleSelect.module.scss';

export const SingleSelect = (props: SelectDefaultProps<string>) => {
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
        {option.image && (
          <AppImage
            src={option.image}
            alt={option.value}
            fallback={<Skeleton height={53} width={53} borderRadius="50%" />}
          />
        )}
        <Text text={option.value} />
      </HStack>
    ),
    [direction, onChangeHandler, value]
  );

  return <Select optionElement={renderOptionElement} {...props} />;
};
