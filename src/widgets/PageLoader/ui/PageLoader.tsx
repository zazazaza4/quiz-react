import { FC } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui/Loader';
import { VStack } from '@/shared/ui/Stack';

import cls from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => (
  <VStack
    align="center"
    justify="center"
    className={classNames(cls.PageLoader, {}, [className])}
  >
    <Loader />
  </VStack>
);
