import {
  AppBarTypeMap,
  default as MuiAppBar,
  AppBarProps as MuiAppBarProps,
} from '@mui/material/AppBar';
import React, { ForwardedRef } from 'react';
import { typedForwardRef } from 'src/utils/types/forward-ref';

export type AppBarProps<D extends React.ElementType = AppBarTypeMap['defaultComponent']> =
  MuiAppBarProps<D, { component?: D }> & {};

const AppBarInner = <D extends React.ElementType = AppBarTypeMap['defaultComponent']>(
  { ...props }: AppBarProps<D>,
  ref: ForwardedRef<HTMLElement>
) => <MuiAppBar {...props} ref={ref}></MuiAppBar>;

export const AppBar = typedForwardRef(AppBarInner);
