import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useTheme } from '@mui/material';
import { ReactNode } from 'react';
import { Link, To } from 'react-router-dom';
import { Box, Stack, Typography } from 'src/ui-components';

export type HomeItemProps = {
  label: string;
  to: To;
  iconStart: ReactNode;
};
export const HomeItem = ({ label, to, iconStart }: HomeItemProps) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: 80,
        pl: 2,
        alignItems: 'center',
        borderBottom: `1px solid ${theme.palette.grey[500]}`,
        justifyContent: 'space-between',
        color: theme.palette.grey[800],
        textDecoration: 'none',
      }}
      component={Link}
      to={to}
      onClick={() => window.scroll({ top: 0 })}
    >
      <Stack sx={{ alignItems: 'center' }}>
        {iconStart}
        <Typography sx={{ fontSize: 20, ml: 2 }}>{label}</Typography>
      </Stack>
      <ChevronRightIcon fontSize='large' />
    </Box>
  );
};
