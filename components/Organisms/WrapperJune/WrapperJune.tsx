import type { AppProps } from 'next/app';
import Container from '@jpe-reader/components/Molecules/Container';
import AuthProvider from '@jpe-reader/contexts/AuthContext';
import TitlePage from '@jpe-reader/components/Molecules/TitlePage';

export interface WrapperJuneProps extends AppProps {}

export default function WrapperJune({
  Component,
  pageProps,
}: WrapperJuneProps) {
  return (
    <AuthProvider>
      <TitlePage />
      <Container>
        <Component {...pageProps} />
      </Container>
    </AuthProvider>
  );
}
