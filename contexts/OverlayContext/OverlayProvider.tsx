import { createContext, ReactNode } from 'react';
import { ID_PORTAL } from '@jpe-reader/components/Organisms/Portal';

type OverlayContextVals = {};

const OverlayContext = createContext<OverlayContextVals>({});

interface OverlayProviderProps {
  children?: ReactNode;
}

function OverlayProvider({ children }: OverlayProviderProps) {
  return (
    <OverlayContext.Provider value={{}}>
      {children}
      <div id={ID_PORTAL} />
    </OverlayContext.Provider>
  );
}

export { OverlayContext };
export default OverlayProvider;
export type { OverlayContextVals, OverlayProviderProps };
