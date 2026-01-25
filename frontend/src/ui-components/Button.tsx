import {
  ButtonTypeMap,
  default as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material/Button';
import { ForwardedRef } from 'react';
import { ButtonOrLinkProps, useButtonOrLink } from 'src/hooks/useButtonOrLink';
import { typedForwardRef } from 'src/utils/types/forward-ref';
import { Tooltip } from './Tooltip';

export type ButtonProps<D extends React.ElementType = ButtonTypeMap['defaultComponent']> =
  MuiButtonProps<D, { component?: D }> &
    ButtonOrLinkProps & {
      tooltip?: string;
    };

export const ButtonInner = <D extends React.ElementType = ButtonTypeMap['defaultComponent']>(
  { variant = 'contained', sx, buttonOrLink, tooltip, ...props }: ButtonProps<D>,
  ref: ForwardedRef<HTMLButtonElement>
) => {
  const rest = useButtonOrLink(buttonOrLink);

  const button = (
    <MuiButton
      variant={variant}
      size='large'
      sx={{
        textTransform: 'none',
        borderRadius: 5,
        fontFamily: '"Sour Gummy", sans-serif',
        ...sx,
      }}
      {...props}
      {...rest}
      ref={ref}
    ></MuiButton>
  );

  return tooltip ? <Tooltip title={tooltip}>{button}</Tooltip> : button;
};

export const Button = typedForwardRef(ButtonInner);
