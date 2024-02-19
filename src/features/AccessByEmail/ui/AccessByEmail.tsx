import { FC, memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserEmail, userActions } from '@/entities/User';

import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import { PrivacyAndTerms } from './PrivacyAndTerms/PrivacyAndTerms';

import cls from './AccessByEmail.module.scss';

const REGEX_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateEmail = (email: string): boolean => REGEX_EMAIL.test(email);

interface AccessByEmailProps {
  className?: string;
  onSuccess: () => void;
}

export const AccessByEmail: FC<AccessByEmailProps> = memo(
  (props: AccessByEmailProps) => {
    const { className, onSuccess } = props;
    const { t } = useTranslation('email');
    const dispatch = useAppDispatch();
    const userEmail = useSelector(getUserEmail);

    const [isNotValid, setIsNotValid] = useState<boolean>(false);

    const onChangeEmail = useCallback(
      (value: string = '') => {
        const isValid = validateEmail(value);
        setIsNotValid(!isValid);

        dispatch(userActions.setData({ email: value }));
      },
      [dispatch]
    );

    return (
      <VStack
        maxHeight
        align="center"
        className={classNames('', {}, [className])}
      >
        <VStack gap="12" align="center" max className={cls.input}>
          <Input
            isError={isNotValid}
            autofocus
            value={userEmail}
            placeholder={t('email.placeholders.email')}
            onChange={onChangeEmail}
          />
          {isNotValid && (
            <Text text={t('email.errors.invalidEmail')} theme="error" />
          )}
        </VStack>

        <PrivacyAndTerms />
        <Button
          onClick={onSuccess}
          isDisabled={userEmail.length <= 0 || isNotValid}
          className={cls.button}
        >
          {t('buttons.next')}
        </Button>
      </VStack>
    );
  }
);
