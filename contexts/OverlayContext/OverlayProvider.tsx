import { createContext, ReactNode, useState } from 'react';
import cs from 'classnames';

const ID_PORTAL = 'portal-container';

type OverlayContextVals = {
  isOverlay: boolean;
  handleIsOverlay(): void;
};

const OverlayContext = createContext<OverlayContextVals>({
  isOverlay: false,
  handleIsOverlay: () => {},
});

interface OverlayProviderProps {
  children?: ReactNode;
}

function OverlayProvider({ children }: OverlayProviderProps) {
  const [isOverlay, setIsOverlay] = useState(false);
  const classesPortal = cs({ portal: isOverlay });
  const classesOverlay = cs('overlay overlay-backdrop', {
    // 'overlay-transparent': isOverlay,
  });

  const handleIsOverlay = () => setIsOverlay(!isOverlay);

  return (
    <OverlayContext.Provider value={{ isOverlay, handleIsOverlay }}>
      {children}
      <div className={classesPortal}>
        <div id={ID_PORTAL} />
        {isOverlay && (
          <div className={classesOverlay} onClick={handleIsOverlay} />
        )}
      </div>
    </OverlayContext.Provider>
  );
}

export { OverlayContext, ID_PORTAL };
export default OverlayProvider;
export type { OverlayContextVals, OverlayProviderProps };
