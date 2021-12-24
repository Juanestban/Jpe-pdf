import { FC, ReactNode, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Button from '@jpe-reader/components/Atoms/Button';
import { Backdrop, ContainerPortal, ContainerPortalProps } from './styles';

export const ID_PORTAL = 'portal-container';

export interface PortalProps {
  isVisible?: boolean;
  onClose?(): void;
  children: ReactNode;
  footer?: ReactNode;
}

export const Portal: FC<PortalProps & ContainerPortalProps> = ({
  children,
  size,
  footer,
  onClose,
  isVisible = false,
}) => {
  const [isRender, setIsRender] = useState<boolean>(false);

  useEffect(() => {
    const portalContainer = document.querySelector(`#${ID_PORTAL}`);

    if (portalContainer) setIsRender(true);
  }, []);

  return isRender && isVisible
    ? ReactDOM.createPortal(
        <Backdrop>
          <ContainerPortal size={size}>
            <header className="header-portal">
              <Button icon="BiXCircle" onClick={onClose} />
            </header>
            {children}
            <footer className="footer-portal">{footer}</footer>
          </ContainerPortal>
        </Backdrop>,
        document.getElementById(ID_PORTAL)!
      )
    : null;
};
