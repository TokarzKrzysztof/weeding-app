import { ButtonTypeMap } from '@mui/material';
import { ForwardedRef } from 'react';
import { typedForwardRef } from 'src/utils/types/forward-ref';
import { Button, ButtonProps } from './Button';

export type TextButtonProps<D extends React.ElementType = ButtonTypeMap['defaultComponent']> =
  ButtonProps<D>;

export const TextButtonInner = <D extends React.ElementType = ButtonTypeMap['defaultComponent']>(
  { sx, ...props }: TextButtonProps<D>,
  ref: ForwardedRef<HTMLButtonElement>
) => {
  return (
    <Button
      sx={{
        p: 0,
        fontSize: 'inherit',
        lineHeight: 'inherit',
        minWidth: 'initial',
        ...sx,
      }}
      variant='text'
      size='small'
      ref={ref}
      {...(props as any)}
    />
  );
};

export const TextButton = typedForwardRef(TextButtonInner);
