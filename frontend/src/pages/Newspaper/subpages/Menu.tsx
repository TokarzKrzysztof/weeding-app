import { Subpage } from 'src/components/sarka/SlideablePage';
import { Box, Container, Typography } from 'src/ui-components';

export const Menu = () => {
  return (
    <Subpage>
      <Container sx={{ textAlign: 'left' }}>
        <Box sx={{ mt: 2 }}>
          <Typography sx={{ fontWeight: 'bold' }}>Obiad</Typography>
          <Typography>najlepsi w uchwyceniu najpiękniejszych chwil</Typography>
        </Box>
        <Box sx={{ mt: 5 }}>
          <Typography sx={{ fontWeight: 'bold' }}>Zupa</Typography>
          <Typography>najlepsi w uchwyceniu najpiękniejszych chwil</Typography>
        </Box>
        <Box sx={{ mt: 5 }}>
          <Typography sx={{ fontWeight: 'bold' }}>Zupa</Typography>
          <Typography>najlepsi w uchwyceniu najpiękniejszych chwil</Typography>
        </Box>
      </Container>
    </Subpage>
  );
};

Menu.displayName = 'Menu';
