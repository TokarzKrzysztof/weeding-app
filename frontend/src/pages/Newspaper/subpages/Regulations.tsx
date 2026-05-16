import { Box, Container, Typography } from 'src/ui-components';

export const Regulations = () => {
  return (
    <Container sx={{ textAlign: 'left' }}>
      <Box sx={{ mt: 2 }}>
        <Typography sx={{ fontWeight: 'bold' }}>1. Tańczysz, nawet jeśli nie umiesz.</Typography>
        <Typography>
          Liczy się serce, nie kroki - na naszym parkiecie każdy jest mistrzem!
        </Typography>
      </Box>
      <Box sx={{ mt: 5 }}>
        <Typography sx={{ fontWeight: 'bold' }}>
          2. Jedzenie i picie nie mają limitu, ale umiar już tak.
        </Typography>
        <Typography> Talerz pełny, kieliszek też - i tak przez całą noc!</Typography>
      </Box>
      <Box sx={{ mt: 5 }}>
        <Typography sx={{ fontWeight: 'bold' }}>
          3. Zdjęcia i kompromitujące filmy mile widziane.
        </Typography>
        <Typography> Ale pamiętaj: co dzieje się na weselu… zostaje na naszym dysku 😄</Typography>
      </Box>
      <Box sx={{ mt: 5 }}>
        <Typography sx={{ fontWeight: 'bold' }}>
          4. Krawaty i obcasy mogą zostać porzucone.
        </Typography>
        <Typography>
          Wygoda ponad modę - ta noc należy do szalonych tańców i bosych stóp!
        </Typography>
      </Box>
      <Box sx={{ mt: 5 }}>
        <Typography sx={{ fontWeight: 'bold' }}>
          5. Przytulaj, śmiej się, wzruszaj i baw się najlepiej, jak potrafisz.
        </Typography>
        <Typography> Bo to właśnie Ty tworzysz ten dzień razem z nami ❤️</Typography>
      </Box>
    </Container>
  );
};

Regulations.displayName = 'Regulations';
