import { CountryItem } from 'src/pages/Trips/CountryItem';
import { FullscreenDialog } from 'src/pages/Trips/FullscreenDialog';
import { TRIPS_DATA } from 'src/pages/Trips/trips-data';
import { Container, Typography } from 'src/ui-components';

export const Trips = () => {
  return (
    <>
      <Container sx={{ textAlign: 'center' }}>
        <Typography mb={5}>
          Poznaj miejsca, które razem odwiedziliśmy. Każda podróż to dla nas wspomnienia, przygody i
          historie, które na długo zostają w pamięci. 🌍
        </Typography>

        {TRIPS_DATA.map((x, i) => (
          <CountryItem data={x} key={x.label} delay={1000 + i * 100} />
        ))}
      </Container>
      <FullscreenDialog />
    </>
  );
};

Trips.displayName = 'Trips';
