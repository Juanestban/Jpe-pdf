import { FC, HTMLProps, forwardRef } from 'react';
import css from './styles';

const Container = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(
  function Container({ children, ...props }, ref) {
    return (
      <>
        <div ref={ref} {...props} className={`container ${props.className}`}>
          {children}
        </div>
        <style jsx>{css}</style>
      </>
    );
  }
) as unknown as FC<HTMLProps<HTMLDivElement>>;

export default Container;
