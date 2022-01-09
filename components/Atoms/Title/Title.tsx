import { FC, DetailedHTMLProps, HTMLAttributes, forwardRef } from 'react';
import cs from 'classnames';
import {
  BaseTextProps,
  FontSize,
} from '@jpe-reader/components/Atoms/Typography';
import styles from './styles';

type TitlePropsPrimary = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
> &
  BaseTextProps;

interface TitleProps extends TitlePropsPrimary {
  Component?: 'h1' | 'h2' | 'h3' | 'h4';
}

const fontSizeTypes: { [key in FontSize]: FontSize } = {
  'extra-large': 'extra-large',
  'semi-large': 'semi-large',
  large: 'large',
  'semi-normal': 'semi-normal',
  normal: 'normal',
  'semi-small': 'semi-small',
  small: 'small',
};

const Title = forwardRef<HTMLHeadingElement, TitleProps>(function Title(
  {
    Component = 'h2',
    color = 'label',
    fontSize,
    className,
    children,
    ...props
  },
  ref
) {
  const conditionalFonts =
    Component === 'h1'
      ? 'semi-large'
      : Component === 'h2'
      ? 'large'
      : Component === 'h3'
      ? 'semi-normal'
      : 'normal';
  const classesTitle = cs(
    `color-${color}`,
    fontSizeTypes[fontSize || conditionalFonts],
    className
  );

  return (
    <>
      <Component ref={ref} className={classesTitle} {...props}>
        {children}
      </Component>
      <style jsx>{styles}</style>
    </>
  );
}) as unknown as FC<TitleProps>;

export default Title;
export type { TitleProps };
