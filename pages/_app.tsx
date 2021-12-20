import { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';
import ThemeProvider from '@jpe-reader/contexts/ThemeContext';
import Spinner from '@jpe-reader/components/Molecules/Spinner/Spinner';
import Navbar from '@jpe-reader/components/Molecules/Navbar';

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
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
