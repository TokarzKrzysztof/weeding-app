import {
  default as MuiToolbar,
  ToolbarProps as MuiToolbarProps,
  ToolbarTypeMap,
} from '@mui/material/Toolbar';

export type ToolbarProps<D extends React.ElementType = ToolbarTypeMap['defaultComponent']> =
  MuiToolbarProps<D, { component?: D }> & {};

export const Toolbar = <D extends React.ElementType = ToolbarTypeMap['defaultComponent']>({
  ...props
}: ToolbarProps<D>) => <MuiToolbar {...props}></MuiToolbar>;
