import { Collapse, useTheme } from '@mui/material';
import { useState } from 'react';
import { useDocumentTitle } from 'src/hooks/useDocumentTitle';
import { Box, buildImgSrc, Container, Stack, Typography } from 'src/ui-components';

export const Home = () => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  useDocumentTitle(null);
  return (
    <Container sx={{ textAlign: 'center' }}>
      <Typography type='title' component={'h1'}>
        Witamy na naszym weselu!
      </Typography>
      <Typography mt={5}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur libero, vero corrupti
        consequatur delectus maxime magnam consequuntur quisquam quod repudiandae autem itaque quo,
        temporibus minus beatae explicabo? Perferendis, quo possimus!
      </Typography>
      <Stack
        sx={{
          px: 2,
          gap: 2,
          alignItems: 'center',
          justifyContent: 'center',
          mt: 2,
          boxShadow: 4,
          height: 80,
          borderRadius: 3,
        }}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <img style={{ width: 50 }} src={buildImgSrc('grecja.png' as any)} alt='' />
        <Typography sx={{ fontSize: 28 }}>Grecja</Typography>
      </Stack>
      <Collapse in={isOpen}>
        <Box
          sx={{
            px: 2,
            gap: 2,
            alignItems: 'center',
            justifyContent: 'center',
            mt: 2,
            background: theme.palette.grey[100],
            // boxShadow: 4,
            minHeight: 80,
            borderRadius: 3,
          }}
        ></Box>
      </Collapse>
      <Stack
        sx={{
          px: 2,
          gap: 2,
          alignItems: 'center',
          justifyContent: 'center',
          mt: 2,
          boxShadow: 4,
          height: 80,
          borderRadius: 3,
        }}
      >
        <img style={{ width: 50 }} src={buildImgSrc('japonia.png' as any)} alt='' />
        <Typography sx={{ fontSize: 28 }}>Japonia</Typography>
      </Stack>
    </Container>
  );
};

Home.displayName = 'Home';
