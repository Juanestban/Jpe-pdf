import { FC, forwardRef, HTMLProps } from 'react';
import cs from 'classnames';
import css from './styles';

export type FontSize =
  | 'extra-large'
  | 'semi-large'
  | 'large'
  | 'semi-normal'
  | 'normal'
  | 'semi-small'
  | 'small';

export type BaseTextProps = {
  fontSize?: FontSize;
  color?: 'primary' | 'secondary' | 'tertiary' | 'label';
};

type TypographyPrimaryProps = HTMLProps<
  HTMLParagraphElement & HTMLSpanElement
> &
  BaseTextProps;

type TypographyComponent = 'p' | 'span';

export interface TypographyProps extends TypographyPrimaryProps {
  variant?: 'label' | 'border' | 'wherever';
  component?: TypographyComponent;
}

export const Typography = forwardRef<
  HTMLParagraphElement & HTMLSpanElement,
  TypographyProps
>(function Typography(
  {
    component,
    color = 'label',
    fontSize = 'normal',
    className,
    children,
    ...props
  },
  ref
) {
  const classes = cs(`color-${color}`, fontSize, className);
  const Component: TypographyComponent = component || 'p';

  return (
    <>
      <Component ref={ref} className={classes} {...props}>
        {children}
      </Component>
      <style jsx>{css}</style>
    </>
  );
}) as FC<TypographyProps>;
