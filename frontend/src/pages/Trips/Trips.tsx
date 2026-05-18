import { Subpage } from 'src/components/sarka/SlideablePage';
import { CountryItem } from 'src/pages/Trips/CountryItem';
import { FullscreenDialog } from 'src/pages/Trips/FullscreenDialog';
import { TRIPS_DATA } from 'src/pages/Trips/trips-data';
import { Box, buildImgSrc, Container, Typography } from 'src/ui-components';

export const Trips = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        overflow: 'auto',
        backgroundImage: `linear-gradient(rgba(255,255,255, 0.8), rgba(255,255,255, 0.8)), url(${buildImgSrc('tła/podroze.jpg')})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Subpage>
        <Container>
          <Typography mb={5}>
            Poznaj miejsca, które razem odwiedziliśmy. Każda podróż to dla nas wspomnienia, przygody
            i historie, które na długo zostają w pamięci. 🌍
          </Typography>

          {TRIPS_DATA.map((x, i) => (
            <CountryItem data={x} key={x.label} delay={500 + i * 100} />
          ))}
        </Container>
        <FullscreenDialog />
      </Subpage>
    </Box>
  );
};

Trips.displayName = 'Trips';
