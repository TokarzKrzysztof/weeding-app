import { useMemo } from 'react';
import { Link, To } from 'react-router-dom';

export type ButtonOrLinkProps = {
  buttonOrLink?: {
    isLink: boolean;
    onClick: React.MouseEventHandler<HTMLElement> | undefined;
    to: To | undefined;
  };
};
export const useButtonOrLink = (buttonOrLink: ButtonOrLinkProps['buttonOrLink']) => {
  const result = useMemo(() => {
    if (buttonOrLink) {
      if (buttonOrLink.isLink) {
        return { component: Link, to: buttonOrLink.to };
      } else {
        return { onClick: buttonOrLink.onClick };
      }
    }
    return {};
  }, [buttonOrLink]);

  return result;
};
