import { forwardRef, FC, HTMLProps } from 'react';
import { LinkProps as LinkPropsInitial } from 'next/link';
import css from './styles';

type LinkPropsPrimary = HTMLProps<HTMLAnchorElement> & LinkPropsInitial;

interface LinkProps extends LinkPropsPrimary {}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { children, ...props },
  ref
) {
  return (
    <>
      <a ref={ref} {...props}>
        {children}
      </a>
      <style jsx>{css}</style>
    </>
  );
}) as unknown as FC<LinkProps>;

export { Link };
export type { LinkProps };
