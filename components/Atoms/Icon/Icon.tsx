import { forwardRef, FC, HTMLAttributes } from 'react';
import * as ImportsIcons from 'react-icons/io5';
import css from './styles';

export type SizeIcon = number | 'small' | 'normal' | 'large' | 'extra-large';

export interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  icon: keyof typeof ImportsIcons;
  sizeIcon?: SizeIcon;
  color?: string;
}

export const Icon = forwardRef<HTMLSpanElement, IconProps>(function Icon(
  { icon, sizeIcon = 'normal', color, ...props },
  ref
) {
  const IconsNames = { ...ImportsIcons };
  const IconComponent = IconsNames[icon];
  const sizes: { [key in SizeIcon]: number } = {
    small: 16,
    normal: 18,
    large: 20,
    'extra-large': 22,
  };

  return (
    <>
      <span ref={ref} {...props}>
        <IconComponent size={sizes[sizeIcon] || sizes.normal} color={color} />
      </span>
      <style jsx>{css}</style>
    </>
  );
}) as unknown as FC<IconProps>;
