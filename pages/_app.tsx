import { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import ThemeProvider from '@jpe-reader/contexts/ThemeContext';
import Spinner from '@jpe-reader/components/Molecules/Spinner/Spinner';
import Navbar from '@jpe-reader/components/Molecules/Navbar';
import { OverlayProvider } from '@jpe-reader/contexts/OverlayContext';
import Container from '@jpe-reader/components/Molecules/Container';

import 'normalize.css';
import '../styles/globals.css';
import '@jpe-reader/styles/variables-globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const [isRender, setIsRender] = useState<boolean>(false);

  useEffect(() => {
    if (window) {
      setIsRender(true);
    }
  }, []);

  if (!isRender)
    return (
      <div className="container-spinner">
        <Spinner />
      </div>
    );

  return (
    <ThemeProvider>
      <OverlayProvider>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
          />
          <meta name="description" content="Description" />
          <meta name="keywords" content="Keywords" />
          <title>Jpe-pdf</title>

          <link rel="manifest" href="/manifest.json" />
          <link
            href="/icons/favicon-16x16.png"
            rel="icon"
            type="image/png"
            sizes="16x16"
          />
          <link
            href="/icons/favicon-32x32.png"
            rel="icon"
            type="image/png"
            sizes="32x32"
          />
          <link rel="apple-touch-icon" href="/apple-icon.png"></link>
          <meta name="theme-color" content="#317EFB" />
        </Head>
        <Navbar />
        <Container>
          <Component {...pageProps} />
        </Container>
      </OverlayProvider>
    </ThemeProvider>
  );
}

export default MyApp;
