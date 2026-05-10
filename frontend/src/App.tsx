import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { Fade, GlobalStyles } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ErrorBoundary } from 'react-error-boundary';
import { Outlet } from 'react-router-dom';
import { ErrorFallback } from 'src/components/ErrorFallback';
import { HomeItem } from 'src/pages/Home/HomeItem';
import { AppRoutes } from 'src/router/app-routes';
import { Box, buildImgSrc, Container, Typography } from 'src/ui-components';

function App() {
  const theme = useTheme();

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
      <Container sx={{ textAlign: 'center' }}>
        <Fade in timeout={2000}>
          <Box>
            <Box component='img' sx={{ maxWidth: '90%' }} src={buildImgSrc('logo/logo.png')}></Box>
            <Typography mb={5} mt={2} sx={{ fontWeight: 'bold', px: 1, fontSize: '24px' }}>
              Witamy na naszym weselu! 💒
            </Typography>
          </Box>
        </Fade>

        <HomeItem label='Menu weselne' to={AppRoutes.Menu()} iconStart={<RestaurantIcon />}></HomeItem>
        <HomeItem
          label='Nasze podróże'
          to={AppRoutes.Trips()}
          iconStart={<FlightTakeoffIcon />}
        ></HomeItem>
      </Container>
      <Outlet />
    </ErrorBoundary>
  );
}

export default App;
