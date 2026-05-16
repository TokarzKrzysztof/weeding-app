import FavoriteIcon from '@mui/icons-material/Favorite';
import GavelIcon from '@mui/icons-material/Gavel';
import GroupsIcon from '@mui/icons-material/Groups';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import StarIcon from '@mui/icons-material/Star';
import { useTheme } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { SlideablePage } from 'src/components/sarka/SlideablePage';
import { HomeItem } from 'src/pages/Home/HomeItem';
import { AppRoutes } from 'src/router/app-routes';
import { Container, Typography } from 'src/ui-components';

export const Newspaper = () => {
  const theme = useTheme();
  const location = useLocation();

  const listItems = [
    { label: 'Nasza historia', to: AppRoutes.NewspaperOurStory(), icon: <FavoriteIcon /> },
    { label: 'Menu weselne', to: AppRoutes.NewspaperMenu(), icon: <RestaurantIcon /> },
    { label: 'Regulamin wesela', to: AppRoutes.NewspaperRegulations(), icon: <GavelIcon /> },
    { label: 'Usługodawcy', to: AppRoutes.NewspaperService(), icon: <GroupsIcon /> },
    { label: 'Horoskop weselny', to: AppRoutes.NewspaperHoroscope(), icon: <StarIcon /> },
  ];

  const mainContent = (
    <Container>
      <Typography variant='h2' sx={{ fontSize: 20, fontWeight: 'bold', mb: 2, mt: 2 }}>
        Droga rodzino i przyjaciele 💞
      </Typography>
      <Typography sx={{ fontSize: 14, mb: 4 }}>
        W tym najważniejszym dla nas dniu otaczacie nas swoją obecnością, uśmiechem i ciepłem. To
        ogromne szczęście móc dzielić ten wyjątkowy moment z osobami, które kochamy i które są
        częścią naszej historii. Dziękujemy za Waszą obecność, życzliwość, dobre słowo i za to, że
        jesteście z nami. Za każdą łzę wzruszenia, wspólny śmiech i szalony taniec, który jeszcze
        przed nami. <br /> Z wdzięcznością i miłością, <br />
        <b style={{ fontStyle: 'italic', color: theme.palette.primary.main }}>Młoda para</b>
      </Typography>
      {listItems.map((x) => (
        <HomeItem key={x.label} label={x.label} to={x.to} iconStart={x.icon}></HomeItem>
      ))}
    </Container>
  );

  const activeItem = listItems.find((x) => x.to === location.pathname);
  return (
    <SlideablePage
      rootContent={mainContent}
      rootUrl={AppRoutes.Newspaper()}
      pageName={activeItem?.label ?? ''}
    />
  );
};

Newspaper.displayName = 'Newspaper';
