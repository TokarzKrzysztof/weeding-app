import { Instagram } from '@mui/icons-material';
import { Divider, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { useCopy } from 'src/hooks/useCopy';
import { useDeviceMediaQuery } from 'src/hooks/useDeviceMediaQuery';
import { useDocumentTitle } from 'src/hooks/useDocumentTitle';
import { ContactForm } from 'src/pages/Contact/ContactForm';
import { Box, Button, Container, Icon, Stack, Typography } from 'src/ui-components';
import { Contacts, Links } from 'src/utils/constants';

export const Contact = () => {
  const theme = useTheme();
  const { isDesktop } = useDeviceMediaQuery();
  const { handleCopy } = useCopy();

  useDocumentTitle('Kontakt');
  return (
    <Container>
      <Typography type='title'>Skontaktuj się ze mną</Typography>
      <Stack
        mt={8}
        sx={{
          flexDirection: isDesktop ? 'row' : 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: isDesktop ? 2 : 6,
          textAlign: isDesktop ? 'left' : 'center',
        }}
      >
        <Box sx={{ flex: 1, maxWidth: 500 }}>
          {isDesktop && (
            <Typography type='sub-title' sx={{ textAlign: 'inherit', mb: 5 }}>
              Fotografia, która mówi więcej
            </Typography>
          )}
          <Typography>
            Twórzmy razem kadry, które nie tylko przyciągają wzrok, ale też budzą emocje i
            opowiadają historię Twojej marki. Napisz do mnie - zadbam o to, by Twoje produkty
            wyróżniały się w najlepszym świetle.
          </Typography>
          <Divider sx={{ my: isDesktop ? 6 : 3 }} />
          <Stack
            sx={{
              flexDirection: 'column',
              alignItems: isDesktop ? 'flex-start' : 'center',
              gap: 1,
            }}
          >
            <Button
              variant='text'
              startIcon={<Icon name='phone' />}
              size='small'
              onClick={() => handleCopy(Contacts.Phone)}
            >
              {Contacts.Phone}
            </Button>
            <Button
              variant='text'
              startIcon={<Icon name='mail_outline' />}
              size='small'
              onClick={() => handleCopy(Contacts.Email)}
            >
              {Contacts.Email}
            </Button>
            <Button
              variant='text'
              startIcon={<Instagram />}
              size='small'
              component={Link}
              to={Links.InstagramProfessional.url}
              target='_blank'
            >
              {Links.InstagramProfessional.name}
            </Button>
          </Stack>
        </Box>
        <Box
          sx={{
            boxShadow: 4,
            borderRadius: 3,
            flex: 1,
            maxWidth: 500,
            width: isDesktop ? undefined : '100%',
            mt: isDesktop ? undefined : 4,
          }}
        >
          <ContactForm />
        </Box>
      </Stack>
      {/* <span onClick={() => send('krzysiek210796@gmail.com')}>Kontakt - wyślij</span> */}
    </Container>
  );
};

Contact.displayName = 'Contact';
