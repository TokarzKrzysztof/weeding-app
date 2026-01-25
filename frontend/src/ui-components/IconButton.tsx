import { styled } from '@mui/material';
import {
  default as MuiIconButton,
  IconButtonProps as MuiIconButtonProps,
  IconButtonTypeMap
} from '@mui/material/IconButton';
import { ForwardedRef } from 'react';
import { ButtonOrLinkProps, useButtonOrLink } from 'src/hooks/useButtonOrLink';
import { typedForwardRef } from 'src/utils/types/forward-ref';
import { shouldNotForwardPropsWithKeys } from 'src/utils/types/should-not-forward-props';
import { Tooltip } from './Tooltip';

const StyledMuiIconButton = styled(MuiIconButton, {
  shouldForwardProp: shouldNotForwardPropsWithKeys<{ filled: boolean | undefined }>(['filled']),
})<{ filled: boolean | undefined }>(({ theme, filled }) => {
  if (filled)
    return {
      backgroundColor: theme.palette.primary.main,
      '&.Mui-disabled': {
        backgroundColor: theme.palette.action.disabled,
      },
      '.MuiIcon-root': {
        color: theme.palette.common.white,
      },
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
      },
    };
  return {};
});

export type IconButtonProps<D extends React.ElementType = IconButtonTypeMap['defaultComponent']> =
  MuiIconButtonProps<D, { component?: D }> &
    ButtonOrLinkProps & {
      tooltip?: string;
      filled?: boolean;
    };

export const IconButtonInner = <
  D extends React.ElementType = IconButtonTypeMap['defaultComponent']
>(
  { filled, tooltip, buttonOrLink, ...props }: IconButtonProps<D>,
  ref: ForwardedRef<HTMLButtonElement>
) => {
  const rest = useButtonOrLink(buttonOrLink);

  const button = (
    <StyledMuiIconButton filled={filled} ref={ref} {...props} {...rest}></StyledMuiIconButton>
  );
  return tooltip ? <Tooltip title={tooltip}>{button}</Tooltip> : button;
};

export const IconButton = typedForwardRef(IconButtonInner);
