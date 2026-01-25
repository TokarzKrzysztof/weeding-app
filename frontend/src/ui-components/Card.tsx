import { CardProps as MuiCardProps, CardTypeMap, default as MuiCard } from '@mui/material/Card';
import { ForwardedRef } from 'react';
import { typedForwardRef } from 'src/utils/types/forward-ref';

export type CardProps<D extends React.ElementType = CardTypeMap['defaultComponent']> = MuiCardProps<
  D,
  { component?: D }
> & {};

export const CardInner = <D extends React.ElementType = CardTypeMap['defaultComponent']>(
  { ...props }: CardProps<D>,
  ref: ForwardedRef<HTMLDivElement>
) => <MuiCard {...props} ref={ref}></MuiCard>;

export const Card = typedForwardRef(CardInner);
