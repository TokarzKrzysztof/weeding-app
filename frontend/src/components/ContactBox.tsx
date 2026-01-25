import { useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { AppRoutes } from 'src/router/app-routes';
import { Box, Button, Typography } from 'src/ui-components';

export type ContactBoxProps = {};
export const ContactBox = ({ ...props }: ContactBoxProps) => {
  const theme = useTheme();

  return (
    <Box p={2} textAlign={'center'} sx={{ background: theme.palette.primary.light }}>
      <Typography type='sub-title'>Zarezerwuj swoją sesję już dziś!</Typography>
      <Typography mt={2} mb={3}>
        Stwórzmy razem coś kreatywnego!
      </Typography>
      <Box py={2}>
        <Button size='large' component={Link} to={AppRoutes.Contact()}>
          Skontaktuj się
        </Button>
      </Box>
    </Box>
  );
};
