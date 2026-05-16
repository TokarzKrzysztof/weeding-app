import ArticleIcon from '@mui/icons-material/Article';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import LocalSeeIcon from '@mui/icons-material/LocalSee';
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
    { label: 'Nasze podróże', to: AppRoutes.Trips(), icon: <FlightTakeoffIcon /> },
    { label: 'Gazetka weselna', to: AppRoutes.Newspaper(), icon: <ArticleIcon /> },
  ];

  const mainContent = (
    <Container>
      <Fade in timeout={2000}>
        <Box>
          <Box component='img' sx={{ maxWidth: '90%' }} src={buildImgSrc('logo/logo.png')}></Box>
          <Typography mb={3} mt={2} sx={{ fontWeight: 'bold', px: 1, fontSize: '24px' }}>
            Witamy na naszym weselu! 💒
          </Typography>

          {listItems.map((x) => (
            <HomeItem key={x.label} label={x.label} to={x.to} iconStart={x.icon}></HomeItem>
          ))}

          <Typography
            sx={{
              mt: 6,
              mb: 1.5,
              fontSize: 24,
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
              position: 'relative',
            }}
          >
            <LocalSeeIcon
              sx={{
                color: '#d689ba',
                fontSize: 36,
                transform: 'rotate(-20deg) translateX(10px)',
                left: 0,
                position: 'absolute'
              }}
            />
            Ważna informacja!
          </Typography>
          <Typography>
            Drodzy Goście! Przy wyjściu, na stoliku, znajduje się <b>nasza księga gości</b>. Będzie
            dla nas ogromną radością, jeśli każdy z Was pozostawi w niej{' '}
            <b>swój wpis oraz wklei swoje zdjęcie wykonane aparatem</b>. Z całego serca dziękujemy
            za tę wyjątkową pamiątkę! W razie potrzeby prosimy o kontakt z naszymi świadkami
          </Typography>
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
