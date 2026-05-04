import { Fade } from '@mui/material';
import { useSnackbar } from 'notistack';
import { useEffect } from 'react';
import { RedirectButton } from 'src/components/RedirectButton';
import { CountryItem } from 'src/pages/Home/CountryItem';
import { data } from 'src/pages/Home/data';
import { HomeFullscreenDialog } from 'src/pages/Home/FullscreenDialog';
import { Box, buildImgSrc, Container, Typography } from 'src/ui-components';

export const Home = () => {
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    return () => {
      setTimeout(() => {
        enqueueSnackbar(
          <Box>
            Podziel się swoimi zdjęciami z wesela! 😊 Kliknij{' '}
            <RedirectButton component={'a'} href='https://www.google.pl' target='_blank'>
              tutaj
            </RedirectButton>{' '}
            aby przejść do naszego dysku Google.
          </Box>,
          { variant: 'default', persist: true, transitionDuration: { enter: 1000, exit: 300 } },
        );
      }, 5000);
    };
  }, []);

  return (
    <>
      <Container sx={{ textAlign: 'center' }}>
        <Fade in timeout={2000}>
          <Box>
            <Box component='img' sx={{ maxWidth: '90%' }} src={buildImgSrc('logo/logo.png')}></Box>
            <Typography mb={5}>
              Poznaj miejsca, które razem odwiedziliśmy. Każda podróż to dla nas wspomnienia,
              przygody i historie, które na długo zostają w pamięci. 🌍
            </Typography>
          </Box>
        </Fade>

        {data.map((x, i) => (
          <CountryItem data={x} key={x.label} delay={1000 + i * 100} />
        ))}
      </Container>
      <HomeFullscreenDialog />
    </>
  );
};

Home.displayName = 'Home';
