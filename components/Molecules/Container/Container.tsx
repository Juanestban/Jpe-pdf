import { FC, HTMLProps, forwardRef } from 'react';
import cs from 'classnames';
import css from './styles';

const Container = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(
  function Container({ children, className, ...props }, ref) {
    const classes = cs('container', className);

    return (
      <>
        <div ref={ref} {...props} className={classes}>
          {children}
        </div>
        <style jsx>{css}</style>
      </>
    );
  }
) as unknown as FC<HTMLProps<HTMLDivElement>>;

export default Container;
