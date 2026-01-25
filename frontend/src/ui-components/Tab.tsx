import { default as MuiTab, TabProps as MuiTabProps, TabTypeMap } from '@mui/material/Tab';
import { ForwardedRef } from 'react';
import { typedForwardRef } from 'src/utils/types/forward-ref';

export type TabProps<D extends React.ElementType = TabTypeMap['defaultComponent']> = MuiTabProps<
  D,
  { component?: D }
> & {};

const TabInner = <D extends React.ElementType = TabTypeMap['defaultComponent']>(
  { ...props }: TabProps<D>,
  ref: ForwardedRef<HTMLDivElement>
) => <MuiTab ref={ref} {...props}></MuiTab>;

export const Tab = typedForwardRef(TabInner);
