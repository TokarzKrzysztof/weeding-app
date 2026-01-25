import {
  default as MuiListItemButton,
  ListItemButtonProps as MuiListItemButtonProps,
  ListItemButtonTypeMap
} from '@mui/material/ListItemButton';
import { ForwardedRef } from 'react';
import { ButtonOrLinkProps, useButtonOrLink } from 'src/hooks/useButtonOrLink';
import { typedForwardRef } from 'src/utils/types/forward-ref';

export type ListItemButtonProps<
  D extends React.ElementType = ListItemButtonTypeMap['defaultComponent']
> = MuiListItemButtonProps<D, { component?: D }> & ButtonOrLinkProps & {};

export const ListItemButtonInner = <
  D extends React.ElementType = ListItemButtonTypeMap['defaultComponent']
>(
  { buttonOrLink, ...props }: ListItemButtonProps<D>,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const rest = useButtonOrLink(buttonOrLink);

  return <MuiListItemButton {...props} ref={ref} {...rest}></MuiListItemButton>;
};

export const ListItemButton = typedForwardRef(ListItemButtonInner);
