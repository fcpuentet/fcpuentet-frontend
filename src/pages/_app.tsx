import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { GoogleAnalytics } from '@/components/Elements';
import { usePageView } from '@/hooks';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  usePageView();

  return (
    <>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
