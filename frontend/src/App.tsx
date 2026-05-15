import FavoriteIcon from '@mui/icons-material/Favorite';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { Fade, GlobalStyles } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ErrorBoundary } from 'react-error-boundary';
import { useLocation } from 'react-router-dom';
import { ErrorFallback } from 'src/components/ErrorFallback';
import { SlideablePage } from 'src/components/sarka/SlideablePage';
import { HomeItem } from 'src/pages/Home/HomeItem';
import { AppRoutes } from 'src/router/app-routes';
import { Box, buildImgSrc, Container, Typography } from 'src/ui-components';

function App() {
  const theme = useTheme();
  const location = useLocation();

  const listItems = [
    { label: 'Menu weselne', to: AppRoutes.Menu(), icon: <RestaurantIcon /> },
    { label: 'Nasze podróże', to: AppRoutes.Trips(), icon: <FlightTakeoffIcon /> },
    { label: 'Nasza historia', to: AppRoutes.OurStory(), icon: <FavoriteIcon /> },
  ];

  const mainContent = (
    <Container>
      <Fade in timeout={2000}>
        <Box>
          <Box component='img' sx={{ maxWidth: '90%' }} src={buildImgSrc('logo/logo.png')}></Box>
          <Typography mb={5} mt={2} sx={{ fontWeight: 'bold', px: 1, fontSize: '24px' }}>
            Witamy na naszym weselu! 💒
          </Typography>

          {listItems.map((x) => (
            <HomeItem key={x.label} label={x.label} to={x.to} iconStart={x.icon}></HomeItem>
          ))}
        </Box>
      </Fade>
    </Container>
  );

  const activeItem = listItems.find((x) => x.to === location.pathname);
  return (
    // ErrorBoundary and provider must be here
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <GlobalStyles
        styles={{
          body: {
            color: theme.palette.text.primary,
          },
        }}
      />
      <SlideablePage
        rootContent={mainContent}
        rootUrl={AppRoutes.Home()}
        pageName={activeItem?.label ?? ''}
      />
    </ErrorBoundary>
  );
}

export default App;
