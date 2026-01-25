import { useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDocumentTitle } from 'src/hooks/useDocumentTitle';
import { AboutMePageContent } from 'src/pages/AboutMe/AboutMePageContent';
import { AppRoutes } from 'src/router/app-routes';
import { Box, Button, Container, Typography } from 'src/ui-components';

export const AboutMe = () => {
  const theme = useTheme();

  useDocumentTitle('O mnie');
  return (
    <Container maxWidth={false} disableGutters sx={{ pb: 0 }}>
      <Typography type='title' sx={{ pb: 6 }}>
        Poznaj mnie bliżej
      </Typography>
      <Box sx={{ backgroundColor: theme.palette.primary.light, overflow: 'hidden' }}>
        <AboutMePageContent />
      </Box>
      <Container>
        <Typography textAlign={'center'} sx={{ pt: 12, fontSize: '1.5rem', fontWeight: 'bold' }}>
          Jeśli zależy Ci na szczerym podejściu, kreatywności i fotograficznej oprawie, która
          odzwierciedli wartości Twojej marki - zapraszam do współpracy. <br /> W moich zdjęciach
          znajdziesz prawdę, pasję i estetykę.
        </Typography>
        <Box my={6} textAlign='center'>
          <Button
            sx={{ transform: 'scale(1.3)' }}
            size='large'
            component={Link}
            to={AppRoutes.Contact()}
          >
            Skontaktuj się
          </Button>
        </Box>
      </Container>
    </Container>
  );
};

AboutMe.displayName = 'AboutMe';
