import { DetailedHTMLProps, InputHTMLAttributes, forwardRef, FC } from 'react';
import css from './styles';

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

const Input = forwardRef<HTMLInputElement, Omit<InputProps, 'children'>>(
  function Input(props, ref) {
    return (
      <>
        <input ref={ref} {...props} />
        <style jsx>{css}</style>
      </>
    );
  }
) as FC<InputProps>;

export default Input;
export type { InputProps };
