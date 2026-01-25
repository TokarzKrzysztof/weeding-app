import { useEffect } from 'react';
import { environment } from 'src/utils/environment-utils';

const initialDocumentTitle = document.title;

const getPrefix = () => {
  if (environment.name === 'local') {
    return 'Local - ';
  } else if (environment.name === 'dev') {
    return 'Dev - ';
  }
  return '';
};

export const useDocumentTitle = (title: string | null) => {
  useEffect(() => {
    if (title === null) {
      document.title = getPrefix() + initialDocumentTitle;
      return;
    }

    document.title = `${getPrefix()}Sara Waśko - ${title}`;
  }, [title]);
};
