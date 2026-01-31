import { useTheme } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { AppRoutes } from 'src/router/app-routes';
import { Button, Typography } from 'src/ui-components';

const RedirectButton = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const to = AppRoutes.Home({ place: 'Delfy / Arachova' });

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();

    navigate(AppRoutes.Home());
    setTimeout(() => {
      navigate(to);
    }, theme.transitions.duration.enteringScreen);
  };

  return (
    <Button component={Link} to={to} onClick={handleClick}>
      Delfy arachova
    </Button>
  );
};

export const AthensContent = () => {
  return (
    <>
      {/* <ImagesSet
                  images={['o-mnie/sekcja-2-1.jpg', 'o-mnie/sekcja-2-2.jpg', 'o-mnie/sekcja-2-3.jpg']}
                /> */}
      <Typography my={3}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum quidem magnam ullam. Ratione
        itaque quia saepe, nihil incidunt sapiente nesciunt eveniet quaerat officiis error expedita
        magnam unde quo fugiat voluptatum!
      </Typography>
      <RedirectButton />
      {/* <Button component={Link} to={AppRoutes.Home({ place: 'Delfy / Arachova' })}>
        Delfy arachova
      </Button> */}
      {/* <ImagesSet images={['o-mnie/sekcja-2-2.jpg', 'o-mnie/sekcja-2-3.jpg']} /> */}
      <Typography my={3}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum quidem magnam ullam. Ratione
        itaque quia saepe, nihil incidunt sapiente nesciunt eveniet quaerat officiis error expedita
        magnam unde quo fugiat voluptatum!
      </Typography>
    </>
  );
};
