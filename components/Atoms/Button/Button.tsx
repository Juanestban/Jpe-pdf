import { FC, forwardRef, HTMLAttributes } from 'react';
import * as IconsImports from 'react-icons/fa';
import classnames from 'classnames';
import css from './styles';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: 'normal' | 'bordered' | 'active';
  rol?: 'normal' | 'primary' | 'secundary' | 'tertiary';
  ifFullWidth?: boolean;
  icon?: keyof typeof IconsImports;
  size?: number | string;
  colorIcon?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { children, className, icon, size = 16, colorIcon, ...props },
  ref
) {
  const buttonClasses = classnames('button', className);
  const IconsNames = { ...IconsImports };
  const Icon = IconsNames[icon!];

  return (
    <>
      <button ref={ref} className={buttonClasses} {...props}>
        {icon && (
          <Icon
            size={size}
            color={colorIcon}
            style={{ marginRight: children ? 5 : 0 }}
          />
        )}
        {children}
      </button>
      <style jsx>{css}</style>
    </>
  );
}) as unknown as FC<ButtonProps>;

export default Button;
export type { ButtonProps };
