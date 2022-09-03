import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { existsGaId, pageview } from '@/utils';

type RouteChangeCompleteEventOptions = {
  shallow: boolean;
};

export const usePageView = () => {
  const router = useRouter();

  useEffect(() => {
    if (!existsGaId) {
      return;
    }

    const handleRouteChange = (path: string, { shallow }: RouteChangeCompleteEventOptions) => {
      if (!shallow) {
        pageview(path);
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
};
