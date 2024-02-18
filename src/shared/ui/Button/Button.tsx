import { ButtonHTMLAttributes, FC, memo, ReactNode } from 'react';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';

import cls from './Button.module.scss';

type ButtonTheme = 'primary' | 'clear';
type ButtonSize = 'size_m' | 'none';

const themeClasses: Record<ButtonTheme, string> = {
  primary: cls.primary,
  clear: cls.clear,
};

const sizeClasses: Record<ButtonSize, string> = {
  size_m: cls.size_m,
  none: cls.none,
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  theme?: ButtonTheme;
  size?: ButtonSize;
  isDisabled?: boolean;
}

export const Button: FC<ButtonProps> = memo(
  ({
    className,
    children,
    size = 'size_m',
    theme = 'primary',
    isDisabled = false,
    ...otherProps
  }: ButtonProps) => {
    const mods: Mods = {
      [cls.disabled]: isDisabled,
    };

    return (
      <button
        type="button"
        className={classNames(cls.Button, mods, [
          className,
          themeClasses[theme],
          sizeClasses[size],
        ])}
        disabled={isDisabled}
        {...otherProps}
      >
        {children}
      </button>
    );
  }
);
