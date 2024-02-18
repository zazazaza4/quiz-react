import { memo, SVGProps } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Icon.module.scss';

type IconTheme = 'primary' | 'white' | 'transparent';

const themeClasses: Record<IconTheme, string> = {
  primary: cls.primary,
  white: cls.white,
  transparent: cls.transparent,
};

const strokeThemeClasses: Record<IconTheme, string> = {
  primary: cls.strokePrimary,
  white: cls.strokeWhite,
  transparent: cls.strokeTransparent,
};

interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string;
  Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  theme?: IconTheme;
  strokeTheme?: IconTheme;
}

export const Icon = memo(
  ({
    className,
    Svg,
    strokeTheme = 'transparent',
    theme = 'white',
    ...otherProps
  }: IconProps) => (
    <Svg
      className={classNames('', {}, [
        className,
        themeClasses[theme],
        strokeThemeClasses[strokeTheme],
      ])}
      {...otherProps}
    />
  )
);
