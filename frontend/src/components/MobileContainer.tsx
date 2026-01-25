import { useScrollTrigger } from '@mui/material';
import { ReactNode } from 'react';
import { Header } from 'src/components/app-header/Header';
import { Footer } from 'src/components/Footer';
import { Box, Icon, IconButton, Stack } from 'src/ui-components';

export type MobileContainerProps = {
  children: ReactNode;
};
export const MobileContainer = ({ children }: MobileContainerProps) => {
  const isScrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: 500,
  });

  return (
    <Stack minHeight='100svh' direction='column'>
      <Header />
      <Box component='main' sx={{ flexGrow: 1 }}>
        {children}
      </Box>
      <Footer />
      <IconButton
        sx={{
          position: 'fixed',
          bottom: 15,
          right: 15,
          opacity: isScrolled ? 1 : 0,
          transition: '.5s',
        }}
        onClick={() => scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <Icon name='keyboard_double_arrow_up' />
      </IconButton>
    </Stack>
  );
};
