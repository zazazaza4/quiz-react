import { ChangeEventHandler, useCallback } from 'react';

import CheckBoxIcon from '@/shared/assets/icons/checkbox.svg';

import { Icon } from '../../Icon';
import { HStack } from '../../Stack';
import { Text } from '../../Text';
import { Select, SelectDefaultProps, SelectOption } from '../Select/Select';

import cls from './MultipleSelect.module.scss';

export const MultipleSelect = (props: SelectDefaultProps) => {
  const { value, onChange } = props;

  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      const newValue = event.target.value;
      onChange?.(newValue);
    },
    [onChange]
  );

  const renderOptionElement = useCallback(
    (option: SelectOption) => (
      <HStack as="label" className={cls.option} key={option.value}>
        <input
          className={cls.input}
          name="checkbox"
          type="checkbox"
          value={value}
          onChange={onChangeHandler}
        />
        <Text text={option.value} />
        <HStack align="center" justify="center" className={cls.checkbox}>
          <Icon Svg={CheckBoxIcon} />
        </HStack>
      </HStack>
    ),
    [onChangeHandler, value]
  );

  return <Select optionElement={renderOptionElement} {...props} />;
};
