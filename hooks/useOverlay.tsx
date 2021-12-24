import { useContext } from 'react';
import { OverlayContext } from '@jpe-reader/contexts/OverlayContext';

export const useOverlay = () => useContext(OverlayContext);
