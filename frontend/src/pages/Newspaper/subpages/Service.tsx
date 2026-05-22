import { Subpage } from 'src/components/sarka/SlideablePage';
import { Box, Container, Typography } from 'src/ui-components';

export const Service = () => {
  return (
    <Subpage>
      <Container>
        <Box sx={{ mt: 2 }}>
          <Typography sx={{ fontWeight: 'bold' }}>Bracia Zięba</Typography>
          <Typography>najlepsi w uchwyceniu najpiękniejszych chwil</Typography>
        </Box>
        <Box sx={{ mt: 5 }}>
          <Typography sx={{ fontWeight: 'bold' }}>Krzesavica</Typography>
          <Typography>gwarancja pełnego parkietu i świetnej zabawy</Typography>
        </Box>
        <Box sx={{ mt: 5 }}>
          <Typography sx={{ fontWeight: 'bold' }}>Uczesanki</Typography>
          <Typography>najpiękniejsze i najtrwalsze fryzury na każdą okazję</Typography>
        </Box>
        <Box sx={{ mt: 5 }}>
          <Typography sx={{ fontWeight: 'bold' }}>Bogumiła Giemzik</Typography>
          <Typography>wyjątkowe krawiectwo artystyczne</Typography>
        </Box>
        <Box sx={{ mt: 5 }}>
          <Typography sx={{ fontWeight: 'bold' }}>Tomasz Grochot</Typography>
          <Typography>prawdziwy specjalista od złota</Typography>
        </Box>
      </Container>
    </Subpage>
  );
};

Service.displayName = 'Service';
