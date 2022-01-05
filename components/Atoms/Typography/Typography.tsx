import { FC, forwardRef, HTMLProps } from 'react';
import css from './styles';

export interface TypographyProps extends HTMLProps<HTMLParagraphElement> {
  variant?: 'label' | 'border' | 'wherever';
  component: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4';
}

export const Typography = forwardRef<HTMLParagraphElement, TypographyProps>(
  function Typography(props, ref) {
    return (
      <>
        <p ref={ref} {...props}>
          Hola Mundo
        </p>
        <style jsx>{css}</style>
      </>
    );
  }
) as FC<TypographyProps>;
