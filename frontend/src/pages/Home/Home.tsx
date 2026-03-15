import { Fade } from '@mui/material';
import { CountryItem } from 'src/pages/Home/CountryItem';
import { data } from 'src/pages/Home/data';
import { HomeFullscreenDialog } from 'src/pages/Home/FullscreenDialog';
import { Box, buildImgSrc, Container, Typography } from 'src/ui-components';

export const Home = () => {
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
          <CountryItem data={x} key={x.label} delay={1000 + (i * 100)} />
        ))}
      </Container>
      <HomeFullscreenDialog />
    </>
  );
};

Home.displayName = 'Home';
