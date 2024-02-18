import { FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';

import { Page } from '@/widgets/Page';

import { AccessByEmail } from '@/features/AccessByEmail';

import { userReducer } from '@/entities/User';

import { getRouteResult } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import cls from './EmailPage.module.scss';

interface EmailPageProps {
  className?: string;
}

const reducers: ReducersList = {
  user: userReducer,
};

const EmailPage: FC<EmailPageProps> = memo((props: EmailPageProps) => {
  const { className } = props;
  const navigate = useNavigate();

  const onNextPage = () => {
    navigate(getRouteResult());
  };

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page className={classNames(cls.EmailPage, {}, [className])}>
        <VStack max className="container" align="center">
          <VStack gap="12" max align="center">
            <Text weight="extraBold" title="Email" />
            <Text
              weight="regular"
              size="size_s"
              theme="gray"
              text="Enter your email to get full access"
            />
          </VStack>
          <AccessByEmail onSuccess={onNextPage} className={cls.access} />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  );
});

export default EmailPage;