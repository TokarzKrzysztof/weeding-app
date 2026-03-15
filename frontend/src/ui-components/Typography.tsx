import {
  default as MuiTypography,
  TypographyProps as MuiTypographyProps,
  TypographyTypeMap,
} from '@mui/material/Typography';
import { ForwardedRef } from 'react';
import { typedForwardRef } from 'src/utils/types/forward-ref';

export const largeTextFontSize = '1.2rem';

export type TypographyProps<D extends React.ElementType = TypographyTypeMap['defaultComponent']> =
  MuiTypographyProps<D, { component?: D }> & {};

export const TypographyInner = <
  D extends React.ElementType = TypographyTypeMap['defaultComponent'],
>(
  { sx, type = 'text', ...props }: TypographyProps<D>,
  ref: ForwardedRef<HTMLElement>,
) => {

  return (
    <MuiTypography
      sx={{ fontFamily: '"Nunito Sans", sans-serif', color: '#32383e', ...sx }}
      {...props}
      ref={ref}
    ></MuiTypography>
  );
};

export const Typography = typedForwardRef(TypographyInner);
