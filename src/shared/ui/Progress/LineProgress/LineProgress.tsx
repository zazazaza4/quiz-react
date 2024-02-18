import { FC, memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './LineProgress.module.scss';

interface LineProgressProps {
  className?: string;
  value: number;
  total: number;
  width?: string;
  height?: string;
}

export const LineProgress: FC<LineProgressProps> = memo(
  (props: LineProgressProps) => {
    const { className, total, value, height = '1px', width = '100%' } = props;
    const percentage = (value / total) * 100;

    return (
      <div
        className={classNames(cls.lineProgressContainer, {}, [className])}
        style={{ width, height }}
      >
        <div className={cls.progressBar} style={{ width: `${percentage}%` }} />
      </div>
    );
  }
);
