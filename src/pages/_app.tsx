import '@/styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import { GoogleAnalytics } from '@/components/Elements';
import { usePageView } from '@/hooks';

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  usePageView();

  return (
    <>
      <GoogleAnalytics />
      <AnimatePresence mode='wait'>
        <Component
          key={router.asPath}
          {...pageProps}
        />
      </AnimatePresence>
    </>
  );
}

export default MyApp;
