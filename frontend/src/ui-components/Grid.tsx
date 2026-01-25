import {
  default as MuiGrid,
  GridProps as MuiGridProps,
  GridTypeMap,
} from '@mui/material/Grid';

export type GridProps<
  D extends React.ElementType = GridTypeMap['defaultComponent'],
> = MuiGridProps<D, { component?: D }> & {};

export const Grid = <
  D extends React.ElementType = GridTypeMap['defaultComponent'],
>({
  ...props
}: GridProps<D>) => <MuiGrid {...props}></MuiGrid>;
