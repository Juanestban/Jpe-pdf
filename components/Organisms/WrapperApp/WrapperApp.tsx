import { ReactNode } from 'react';
import ThemeProvider from '@jpe-reader/contexts/ThemeContext';
import OverlayProvider from '@jpe-reader/contexts/OverlayContext';
import LanguageProvider from '@jpe-reader/contexts/LanguageContext';
import FolderAndFilesProvider from '@jpe-reader/contexts/FolderAndFilesContext';

export interface WrapperAppProps {}

export default function WrapperApp({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <OverlayProvider>
        <LanguageProvider>
          <FolderAndFilesProvider>{children}</FolderAndFilesProvider>
        </LanguageProvider>
      </OverlayProvider>
    </ThemeProvider>
  );
}
