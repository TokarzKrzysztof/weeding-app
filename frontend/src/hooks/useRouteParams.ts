import { useMemo } from 'react';
import { NavigateOptions, useSearchParams } from 'react-router-dom';
import { parseIntoURLParams } from 'src/utils/url-utils';

export const useRouteParams = <T extends Record<string, unknown>>() => {
  const [searchParams, setSearchParams] = useSearchParams();

  const params = useMemo(() => {
    const result: Record<string, unknown> = {};
    searchParams.forEach((value, key) => {
      if (value === 'true') {
        result[key] = true;
      } else {
        result[key] = value;
      }
    });
    return result;
  }, [searchParams]);

  const setParams = (params: T, options?: NavigateOptions) => {
    setSearchParams(parseIntoURLParams(params), options);
  };

  return [params as T, setParams] as const;
};
