import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useRouteParams } from 'src/hooks/useRouteParams';

export type UseScrollParams = {
  scrollAction?: 'below-header-smooth' | 'none';
};
export const useScroll = () => {
  const location = useLocation();
  const [params] = useRouteParams<UseScrollParams>();

  useEffect(() => {
    if (params.scrollAction === 'below-header-smooth') {
      const headerHeight = document.querySelector('header')!.clientHeight;

      window.scrollTo({
        top: document.querySelector('main')!.offsetTop - headerHeight,
        behavior: 'smooth',
      });
    } else {
      if (params.scrollAction !== 'none') {
        window.scrollTo({ top: 0 });
      }
    }
  }, [location]);
};
