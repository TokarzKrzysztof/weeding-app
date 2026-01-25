import { alpha, useTheme } from '@mui/material';
import { PropsWithChildren, ReactNode } from 'react';
import { Link, To } from 'react-router-dom';
import { useDeviceMediaQuery } from 'src/hooks/useDeviceMediaQuery';
import { Box, buildImgSrc, Stack, Typography } from 'src/ui-components';
import { ImagePath } from 'src/_generated';

type ItemProps = {
  imgSrc: ImagePath;
  to: To;
  title: string;
  text?: ReactNode;
};
const Item = ({ imgSrc, to, title, text }: ItemProps) => {
  const { isDesktop } = useDeviceMediaQuery();
  const theme = useTheme();

  return (
    <Box
      component={Link}
      to={to}
      sx={{
        position: 'relative',
        backgroundImage: `url(${buildImgSrc(imgSrc)})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        borderRadius: 5,
        flex: 1,
        aspectRatio: '1/1.5',
        overflow: 'hidden',
        transition: '0.8s',
        color: theme.palette.primary.contrastText,
        backgroundBlendMode: 'darken',
        maxWidth: 400,
        width: '100%',
        alignSelf: 'center',
        '&:hover': {
          backgroundColor: alpha('#000', 0.6),
          '.text': {
            opacity: 1,
          },
        },
      }}
    >
      <Typography
        sx={{
          backgroundColor: alpha('#000', 0.5),
          textAlign: 'center',
          py: 2,
          position: 'absolute',
          bottom: 0,
          width: '100%',
          textTransform: 'uppercase',
        }}
      >
        {title}
      </Typography>
      {text && isDesktop && (
        <Typography
          className='text'
          sx={{
            opacity: 0,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            p: 1,
            transition: 'inherit',
          }}
        >
          {text}
        </Typography>
      )}
    </Box>
  );
};

const SelectionBoxes = ({ children }: PropsWithChildren) => {
  const { isDesktop } = useDeviceMediaQuery();

  return (
    <Stack direction={isDesktop ? 'row' : 'column'} gap={3}>
      {children}
    </Stack>
  );
};

SelectionBoxes.Item = Item;
export { SelectionBoxes };

