import { alpha, useTheme } from '@mui/material';
import { Img } from 'src/components/Img';
import { useDeviceMediaQuery } from 'src/hooks/useDeviceMediaQuery';
import { PageHeaderConfig } from 'src/hooks/useHeaderConfig';
import { Box, buildImgSrc, Typography } from 'src/ui-components';

export type GenericHeaderProps = {
  title: PageHeaderConfig['title'];
  folder: PageHeaderConfig['folder'];
};
export const GenericHeader = ({ title, folder }: GenericHeaderProps) => {
  const theme = useTheme();
  const { isDesktop } = useDeviceMediaQuery();

  const src = buildImgSrc(
    isDesktop ? `${folder}/naglowek-komputer1.jpg` : `${folder}/naglowek-telefon1.jpg`
  );
  return (
    <>
      <Box sx={{ position: 'absolute', overflow: 'hidden', inset: 0, zIndex: -1 }}>
        <Img
          src={src}
          key={src}
          sx={{
            height: '100vh',
            width: '100%',
            objectFit: 'cover',
          }}
        />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '90%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: alpha(theme.palette.primary.main, 0.8),
          borderRadius: 3,
          py: isDesktop ? 6 : 4,
          textAlign: 'center',
          maxWidth: 600,
          color: theme.palette.primary.contrastText,
        }}
      >
        <Typography
          component={'h1'}
          variant={isDesktop ? 'h3' : 'h4'}
          sx={{ textTransform: 'uppercase' }}
        >
          {title}
        </Typography>
      </Box>
    </>
  );
};
