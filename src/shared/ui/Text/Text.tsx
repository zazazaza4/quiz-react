import { FC, memo, ReactNode } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Text.module.scss';

type TextWeight = 'regular' | 'medium' | 'semiBold' | 'extraBold';
type TextTheme = 'primary' | 'gray' | 'white' | 'error';
type TextAlign = 'right' | 'left' | 'center';
type TextSize = 'size_s' | 'size_m' | 'size_l';
type TextFont = 'primary' | 'secondary';
type HeaderTagType = 'h1' | 'h2' | 'h3';

const themeClasses: Record<TextTheme, string> = {
  primary: cls.primary,
  gray: cls.gray,
  white: cls.white,
  error: cls.error,
};

const alignClasses: Record<TextAlign, string> = {
  right: cls.right,
  left: cls.left,
  center: cls.center,
};

const sizeClasses: Record<TextSize, string> = {
  size_s: cls.size_s,
  size_m: cls.size_m,
  size_l: cls.size_l,
};

const fontClasses: Record<TextFont, string> = {
  primary: cls.font_primary,
  secondary: cls.font_secondary,
};

const weightClasses: Record<TextWeight, string> = {
  regular: cls.weight_regular,
  medium: cls.weight_medium,
  semiBold: cls.weight_semiBold,
  extraBold: cls.weight_extraBold,
};

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  size_s: 'h3',
  size_m: 'h2',
  size_l: 'h1',
};

interface TextProps {
  className?: string;
  title?: string | ReactNode;
  text?: string | ReactNode;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
  font?: TextFont;
  weight?: TextWeight;
}

export const Text: FC<TextProps> = memo(
  ({
    className,
    text = '',
    title = '',
    theme = 'white',
    align = 'left',
    size = 'size_m',
    font = 'primary',
    weight = 'medium',
  }: TextProps) => {
    const HeaderTag = mapSizeToHeaderTag[size];

    return (
      <div
        className={classNames(cls.Text, {}, [
          className,
          themeClasses[theme],
          alignClasses[align],
          sizeClasses[size],
          fontClasses[font],
          weightClasses[weight],
        ])}
      >
        {title && <HeaderTag className={cls.title}>{title}</HeaderTag>}
        {text && <p className={cls.text}>{text}</p>}
      </div>
    );
  }
);
