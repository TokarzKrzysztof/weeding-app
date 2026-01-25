import {
  default as MuiListSubheader,
  ListSubheaderProps as MuiListSubheaderProps,
  ListSubheaderTypeMap,
} from '@mui/material/ListSubheader';

export type ListSubheaderProps<
  D extends React.ElementType = ListSubheaderTypeMap['defaultComponent'],
> = MuiListSubheaderProps<D, { component?: D }> & {};

export const ListSubheader = <
  D extends React.ElementType = ListSubheaderTypeMap['defaultComponent'],
>({
  ...props
}: ListSubheaderProps<D>) => <MuiListSubheader {...props}></MuiListSubheader>;
