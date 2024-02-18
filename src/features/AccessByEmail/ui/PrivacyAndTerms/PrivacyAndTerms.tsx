import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink';

import cls from './PrivacyAndTerms.module.scss';

interface PrivacyAndTermsProps {
  className?: string;
}

export const PrivacyAndTerms: FC<PrivacyAndTermsProps> = memo(
  (props: PrivacyAndTermsProps) => {
    const { className } = props;
    const { t } = useTranslation('email');

    return (
      <p className={classNames(cls.PrivacyAndTerms, {}, [className])}>
        {t('privacyAndTerms.agree')}
        <AppLink to="/privacy-policy">
          {t('privacyAndTerms.privacyPolicy')}
        </AppLink>
        {t('privacyAndTerms.and')}
        <AppLink to="/terms-of-use">{t('privacyAndTerms.termsOfUse')}</AppLink>
      </p>
    );
  }
);
