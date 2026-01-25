import { useTheme } from '@mui/material';
import { Link, To } from 'react-router-dom';
import { Box, Typography } from 'src/ui-components';

export type SeeAlsoProps = {
  to: To;
  destinationName: string;
};
export const SeeAlso = ({ to, destinationName }: SeeAlsoProps) => {
  const theme = useTheme();

  return (
    <Box textAlign={'center'} mt={6}>
      <Typography>
        Zobacz też:{' '}
        <Box component={Link} to={to} sx={{ color: theme.palette.primary.main }}>
          {destinationName}
        </Box>
      </Typography>
    </Box>
  );
};
