import { useTheme } from '@mui/material/styles';
import {
  default as MuiTypography,
  TypographyProps as MuiTypographyProps,
  TypographyTypeMap
} from '@mui/material/Typography';
import { ForwardedRef, useMemo } from 'react';
import { typedForwardRef } from 'src/utils/types/forward-ref';

export const largeTextFontSize = '1.2rem'

export type TypographyProps<D extends React.ElementType = TypographyTypeMap['defaultComponent']> =
  MuiTypographyProps<D, { component?: D }> & {
    type?: 'title' | 'sub-title' | 'text' | 'large-text';
  };

export const TypographyInner = <
  D extends React.ElementType = TypographyTypeMap['defaultComponent']
>(
  { sx, type = 'text', ...props }: TypographyProps<D>,
  ref: ForwardedRef<HTMLElement>
) => {
  const theme = useTheme();

  const typeProps = useMemo(() => {
    if (type === 'title') {
      return {
        component: 'h2',
        sx: { fontFamily: '"Pacifico", sans-serif', fontSize: '3rem', textAlign: 'center', ...sx },
      } as const;
    }
    if (type === 'sub-title') {
      return {
        component: 'h3',
        sx: { fontFamily: '"Pacifico", sans-serif', fontSize: '2rem', textAlign: 'center', ...sx },
      } as const;
    }
    if(type === 'large-text') {
      return { sx: { fontFamily: '"Noto Sans", sans-serif', fontSize: largeTextFontSize, ...sx } };
    }
    return { sx: { fontFamily: '"Noto Sans", sans-serif', ...sx } };
  }, [type, sx]);

  return <MuiTypography {...typeProps} {...props} ref={ref}></MuiTypography>;
};

export const Typography = typedForwardRef(TypographyInner);
