import { Subpage } from 'src/components/sarka/SlideablePage';
import { Box, Container, Typography } from 'src/ui-components';

export const Menu = () => {
  const subtitleColor = '#d689ba';
  return (
    <Subpage>
      <Container>
        <Box sx={{ mt: 2 }}>
          <Typography sx={{ fontWeight: 'bold', fontSize: 18 }}>OBIAD 15:30</Typography>
          <Box>
            <Typography sx={{ fontWeight: 'bold', color: subtitleColor, mt: 2 }}>ZUPA</Typography>
            <Typography>Krem z pomidorów z serkiem ricotta</Typography>
          </Box>
          <Box>
            <Typography sx={{ fontWeight: 'bold', color: subtitleColor, mt: 2 }}>MIĘSO</Typography>
            <Typography>Kotlet schabowy bez kości</Typography>
            <Typography>Kotlet devolay z serem</Typography>
            <Typography>Pieczarka panierowana, faszerowana mięsem wieprzowym</Typography>
            <Typography>Schab zawijany z konfiturą z czerwonej cebuli</Typography>
            <Typography>Mini szaszłyki z indyka z oscypkiem i boczkiem </Typography>
            <Typography>Zrazy wieprzowe z chorizo </Typography>
          </Box>
          <Box>
            <Typography sx={{ fontWeight: 'bold', color: subtitleColor, mt: 2 }}>
              DODATKI
            </Typography>
            <Typography>Ziemniaki</Typography>
            <Typography>Talarki</Typography>
            <Typography>Ćwiartki ziemniaczane</Typography>
            <Typography>Kluski śląskie</Typography>
          </Box>
          <Box>
            <Typography sx={{ fontWeight: 'bold', color: subtitleColor, mt: 2 }}>
              SURÓWKI
            </Typography>
            <Typography>Bukiet warzyw na gorąco</Typography>
            <Typography>Mizeria</Typography>
            <Typography>Surówka z kapusty ze słodkim sosem chilli</Typography>
            <Typography>Marchewka z brzoskwinią</Typography>
          </Box>
        </Box>
        <Box sx={{ mt: 4 }}>
          <Typography sx={{ fontWeight: 'bold', fontSize: 18 }}>DESER 17:30</Typography>
          <Typography>Fondant czekoladowy z gorącymi wiśniami podany z gałką lodów </Typography>
        </Box>
        <Box sx={{ mt: 4 }}>
          <Typography sx={{ fontWeight: 'bold', fontSize: 18 }}>I KOLACJA 19:30</Typography>
          <Typography>
            Roladka z polędwiczki wieprzowej nadziewana tapenadą z oliwek i suszonych pomidorów /
            zapiekanka ziemniaczana / sos śliwkowy
          </Typography>
        </Box>
        <Box sx={{ mt: 4 }}>
          <Typography sx={{ fontWeight: 'bold', fontSize: 18 }}>TORT WESELNY 21:00</Typography>
        </Box>
        <Box sx={{ mt: 4 }}>
          <Typography sx={{ fontWeight: 'bold', fontSize: 18 }}>II KOLACJA 22:30</Typography>
          <Typography>Żeberka BBQ / ziemniak hasselback / surówka</Typography>
        </Box>
        <Box sx={{ mt: 4 }}>
          <Typography sx={{ fontWeight: 'bold', fontSize: 18 }}>III KOLACJA 00:30</Typography>
          <Typography>Sakiewka drobiowa z sosem szpinakowym / barszcz czerwony</Typography>
        </Box>
        <Box sx={{ mt: 4 }}>
          <Typography sx={{ fontWeight: 'bold', fontSize: 18 }}>IV KOLACJA 2:30</Typography>
          <Typography>Wołowina po burgundzku</Typography>
        </Box>
      </Container>
    </Subpage>
  );
};

Menu.displayName = 'Menu';
