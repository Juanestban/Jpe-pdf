import { FC, forwardRef, DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import * as IconsImports from 'react-icons/io5';
import classnames from 'classnames';
import Icon, { SizeIcon } from '../Icon';
import css from './styles';

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: 'normal' | 'bordered' | 'active';
  rol?: 'normal' | 'primary' | 'secondary' | 'tertiary';
  isFullWidth?: boolean;
  textAlign?: 'left' | 'center' | 'right';
  icon?: keyof typeof IconsImports;
  size?: SizeIcon;
  colorIcon?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  props,
  ref
) {
  const {
    icon,
    children,
    className,
    size = 16,
    textAlign,
    colorIcon,
    isFullWidth,
    ...rest
  } = props;
  const buttonClasses = classnames('button', className, {
    'full-width': isFullWidth,
    [`rol-${rest.rol}`]: rest.rol,
    [`align-${textAlign}`]: textAlign,
  });

  return (
    <>
      <button ref={ref} className={buttonClasses} {...rest}>
        {icon && (
          <Icon
            icon={icon}
            color={colorIcon}
            sizeIcon={size}
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
