import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useTheme } from "@mui/material";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { PlaceLabel } from "src/pages/Home/data";
import { AppRoutes } from "src/router/app-routes";
import { Button } from "src/ui-components";

export const RedirectButton = ({ place, children }: { place: PlaceLabel; children: ReactNode }) => {
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
      onClick={handleClick}
      endIcon={<OpenInNewIcon sx={{ fontSize: '16px !important' }} />}
    >
      {children}
    </Button>
  );
};