import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { TestProps } from '@/shared/types/tests';

import cls from './Flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column';
export type FlexWrap = 'wrap' | 'nowrap';
export type FlexGap = '4' | '8' | '12' | '16' | '20' | '40';

const justifyClasses: Record<FlexJustify, string> = {
  start: cls.justifyStart,
  center: cls.justifyCenter,
  between: cls.justifyBetween,
  end: cls.justifyEnd,
};

const alignClasses: Record<FlexAlign, string> = {
  start: cls.alignStart,
  center: cls.alignCenter,
  end: cls.alignEnd,
};

const directionClasses: Record<FlexDirection, string> = {
  row: cls.directionRow,
  column: cls.directionColumn,
};

const wrapClasses: Record<FlexWrap, string> = {
  wrap: cls.wrap,
  nowrap: cls.nowrap,
};

const gapClasses: Record<FlexGap, string> = {
  4: cls.gap4,
  8: cls.gap8,
  12: cls.gap12,
  16: cls.gap16,
  20: cls.gap20,
  40: cls.gap40,
};

type DivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export interface FlexProps extends DivProps, TestProps {
  className?: string;
  children: ReactNode;
  justify?: FlexJustify;
  align?: FlexAlign;
  direction?: FlexDirection;
  gap?: FlexGap;
  max?: boolean;
  maxWidth?: boolean;
  maxHeight?: boolean;
  wrap?: FlexWrap;
  as?: keyof JSX.IntrinsicElements;
}

export const Flex: FC<FlexProps> = (props: FlexProps) => {
  const {
    className = '',
    children,
    align = 'center',
    direction = 'row',
    justify = 'start',
    gap,
    max = false,
    maxWidth,
    wrap = 'nowrap',
    maxHeight,
    as: Element = 'div',
    style,
  } = props;

  const classes = [
    className,
    wrapClasses[wrap],
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gap && gapClasses[gap],
  ];

  const mods: Mods = {
    [cls.maxWidth]: maxWidth || max,
    [cls.maxHeight]: maxHeight || max,
  };

  return (
    <Element
      className={classNames(cls.Flex, mods, classes)}
      style={style}
      data-testid={props['data-testid'] ?? 'Flex'}
    >
      {children}
    </Element>
  );
};
