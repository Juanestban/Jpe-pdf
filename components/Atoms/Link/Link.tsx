import { forwardRef, FC, HTMLProps } from 'react';
import NavLink, { LinkProps as LinkPropsInitial } from 'next/link';
import css from './styles';

type LinkPropsPrimary = HTMLProps<HTMLAnchorElement> & LinkPropsInitial;

interface LinkProps extends LinkPropsPrimary {}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { children, href, as, key, ...props },
  ref
) {
  return (
    <>
      <NavLink href={href} as={as} key={key} passHref>
        <a ref={ref} {...props}>
          {children}
        </a>
      </NavLink>
      <style jsx>{css}</style>
    </>
  );
}) as unknown as FC<LinkProps>;

export default Link;
export type { LinkProps };
