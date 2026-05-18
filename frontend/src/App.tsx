import LocalSeeIcon from '@mui/icons-material/LocalSee';
import { Fade, GlobalStyles } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from 'src/components/ErrorFallback';
import { SlideablePage } from 'src/components/sarka/SlideablePage';
import { HomeItem } from 'src/pages/Home/HomeItem';
import { listItems } from 'src/pages/Home/list-items';
import { AppRoutes } from 'src/router/app-routes';
import { Box, buildImgSrc, Container, Typography } from 'src/ui-components';

function App() {
  const theme = useTheme();

  const mainContent = (
    <Container>
      <Fade in timeout={2000}>
        <Box>
          <Box component='img' sx={{ maxWidth: '90%' }} src={buildImgSrc('logo/logo.png')}></Box>
          <Typography mb={3} mt={2} sx={{ fontWeight: 'bold', px: 1, fontSize: '24px' }}>
            Witamy na naszym <br /> weselu!{' '}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='35px'
              viewBox='0 0 64 64'
              fill='#d7be38'
              style={{ transform: 'rotate(10deg)', verticalAlign: 'bottom' }}
            >
                <path d='M39.93,15.13a16.85,16.85,0,0,0-7.89,2A16.89,16.89,0,1,0,32,46.86a16.87,16.87,0,1,0,8-31.73ZM24.07,46.87a14.93,14.93,0,1,1,11.58-5.59,10.15,10.15,0,0,1-2.24-1.4,12.29,12.29,0,1,0-5.65,3.77,18,18,0,0,0,2.23,2A14.88,14.88,0,0,1,24.07,46.87ZM37.65,22a10.3,10.3,0,0,1,2.28-.27,10.23,10.23,0,1,1,0,20.46A10,10,0,0,1,37.66,42a16.8,16.8,0,0,0,0-19.93ZM32,25.57a10.21,10.21,0,0,1,0,12.89,10.15,10.15,0,0,1,0-12.89ZM26.34,22a16.8,16.8,0,0,0,0,19.93,9.74,9.74,0,0,1-2.28.27,10.23,10.23,0,1,1,0-20.46A10,10,0,0,1,26.34,22ZM39.93,46.87A14.84,14.84,0,0,1,28.35,22.72a10.13,10.13,0,0,1,2.26,1.42,12.27,12.27,0,1,0,5.63-3.78,16.65,16.65,0,0,0-2.23-2,14.85,14.85,0,1,1,5.92,28.47Z' />
            </svg>
          </Typography>

          {listItems.app.map((x) => (
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
                position: 'absolute',
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
      <SlideablePage rootContent={mainContent} rootUrl={AppRoutes.Home()} />
    </ErrorBoundary>
  );
}

export default App;
