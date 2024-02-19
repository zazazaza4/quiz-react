import { ChangeEventHandler, useCallback } from 'react';

import CheckBoxIcon from '@/shared/assets/icons/checkbox.svg';

import { Icon } from '../../Icon';
import { HStack } from '../../Stack';
import { Text } from '../../Text';
import { Select, SelectDefaultProps, SelectOption } from '../Select/Select';

import cls from './MultipleSelect.module.scss';

interface MultipleSelectProps extends SelectDefaultProps<string[]> {
  selectedValues: string[];
}

export const MultipleSelect = (props: MultipleSelectProps) => {
  const { value = [], onChange } = props;

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
      <HStack as="label" className={cls.option} key={option.value}>
        <input
          className={cls.input}
          name="checkbox"
          type="checkbox"
          value={option.value}
          onChange={onChangeHandler}
        />
        <Text text={option.value} />
        <HStack align="center" justify="center" className={cls.checkbox}>
          <Icon Svg={CheckBoxIcon} />
        </HStack>
      </HStack>
    ),
    [onChangeHandler]
  );

  return <Select optionElement={renderOptionElement} {...props} />;
};
