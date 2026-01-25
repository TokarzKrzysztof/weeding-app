import {
  ContainerProps as MuiContainerProps,
  ContainerTypeMap,
  default as MuiContainer
} from '@mui/material/Container';
import { ForwardedRef } from 'react';
import { typedForwardRef } from 'src/utils/types/forward-ref';

export type ContainerProps<D extends React.ElementType = ContainerTypeMap['defaultComponent']> =
  MuiContainerProps<D, { component?: D }> & {};

const ContainerInner = <D extends React.ElementType = ContainerTypeMap['defaultComponent']>(
  { sx, ...props }: ContainerProps<D>,
  ref: ForwardedRef<HTMLDivElement>
) => (
  <MuiContainer
    ref={ref}
    sx={{
      py: 6,
      ...sx,
    }}
    {...props}
  ></MuiContainer>
);

export const Container = typedForwardRef(ContainerInner);
