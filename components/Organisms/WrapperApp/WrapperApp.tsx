import { ReactNode } from 'react';
import ThemeProvider from '@jpe-reader/contexts/ThemeContext';
import OverlayProvider from '@jpe-reader/contexts/OverlayContext';
import LanguageProvider from '@jpe-reader/contexts/LanguageContext';

export interface WrapperAppProps {}

export default function WrapperApp({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <OverlayProvider>
        <LanguageProvider>{children}</LanguageProvider>
      </OverlayProvider>
    </ThemeProvider>
  );
}
