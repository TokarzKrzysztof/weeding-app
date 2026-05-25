import { Subpage } from 'src/components/sarka/SlideablePage';
import { Box, Container, Typography } from 'src/ui-components';

export const Service = () => {
  return (
    <Subpage>
      <Container>
        <Box sx={{ mt: 2 }}>
          <Typography sx={{ fontWeight: 'bold', fontSize: 20 }}>Bracia Zięba 📸</Typography>
          <Typography>najlepsi w uchwyceniu najpiękniejszych chwil</Typography>
        </Box>
        <Box sx={{ mt: 5 }}>
          <Typography sx={{ fontWeight: 'bold', fontSize: 20 }}>Krzesavica 🎸</Typography>
          <Typography>gwarancja pełnego parkietu i świetnej zabawy</Typography>
        </Box>
        <Box sx={{ mt: 5 }}>
          <Typography sx={{ fontWeight: 'bold', fontSize: 20 }}>Uczesanki 💇‍♀️</Typography>
          <Typography>najpiękniejsze i najtrwalsze fryzury na każdą okazję</Typography>
        </Box>
        <Box sx={{ mt: 5 }}>
          <Typography sx={{ fontWeight: 'bold', fontSize: 20 }}>Bogumiła Giemzik 🪡</Typography>
          <Typography>wyjątkowe krawiectwo artystyczne</Typography>
        </Box>
        <Box sx={{ mt: 5 }}>
          <Typography sx={{ fontWeight: 'bold', fontSize: 20 }}>Tomasz Grochot 💍</Typography>
          <Typography>prawdziwy specjalista od złota</Typography>
        </Box>
        <Box sx={{ mt: 5 }}>
          <Typography sx={{ fontWeight: 'bold', fontSize: 20 }}>Adrian Amanowicz 🪄</Typography>
          <Typography>mistrz iluzji i świetnej atmosfery</Typography>
        </Box>
      </Container>
    </Subpage>
  );
};

Service.displayName = 'Service';
