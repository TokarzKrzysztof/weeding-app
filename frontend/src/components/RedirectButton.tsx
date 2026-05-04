import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { ButtonTypeMap, useTheme } from '@mui/material';
import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlaceLabel } from 'src/pages/Home/data';
import { AppRoutes } from 'src/router/app-routes';
import { Button, ButtonProps } from 'src/ui-components';

export const DialogRedirectButton = ({
  place,
  children,
}: {
  place: PlaceLabel;
  children: ReactNode;
}) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const to = AppRoutes.Home({ place });

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();

    navigate(AppRoutes.Home());
    setTimeout(() => {
      navigate(to);
    }, theme.transitions.duration.enteringScreen);
  };

  return <RedirectButton onClick={handleClick}>{children}</RedirectButton>;
};

export const RedirectButton = <D extends React.ElementType = ButtonTypeMap['defaultComponent']>({
  ...props
}: ButtonProps<D>) => {
  return (
    <Button
      type='button'
      variant='text'
      sx={{
        minWidth: 'auto',
        fontFamily: 'inherit',
        p: 0,
        pr: 0.4,
        fontSize: 'inherit',
        fontStyle: 'italic',
        lineHeight: 'normal',
        '.MuiButton-icon': { ml: 0.5 },
      }}
      endIcon={<OpenInNewIcon sx={{ fontSize: '16px !important' }} />}
      {...(props as any)}
    />
  );
};
