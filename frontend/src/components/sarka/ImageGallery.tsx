import { SxProps, Theme, useTheme } from '@mui/material';
import { lighten } from '@mui/material/styles';
import { useState } from 'react';
import { Img } from 'src/components/Img';
import { Box, Icon, IconButton, Stack } from 'src/ui-components';

export type ImageGalleryProps = {
  images: { src: string }[];
  sx?: SxProps<Theme>;
};
export const ImageGallery = ({ images, sx }: ImageGalleryProps) => {
  const theme = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((prev) => {
      const isLast = prev + 1 === images.length;
      return isLast ? 0 : prev + 1;
    });
  };
  const prev = () => {
    setActiveIndex((prev) => {
      const isFirst = prev === 0;
      return isFirst ? images.length - 1 : prev - 1;
    });
  };

  return (
    <Stack sx={{ justifyContent: 'space-between', mb: 20, alignItems: 'center', ...sx }}>
      <IconButton onClick={prev}>
        <Icon fontSize='large' name='keyboard_arrow_left' />
      </IconButton>
      <Box sx={{ position: 'relative', height: 400, width: 200 }}>
        {images.map((x, i) => (
          <Img
            key={x.src}
            src={x.src}
            sx={{
              maxWidth: '100%',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              objectFit: 'contain',
              position: 'absolute',
              transition: '500ms',
              opacity: i === activeIndex ? 1 : 0,
            }}
          />
        ))}
        <Stack
          sx={{
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            gap: 1,
          }}
        >
          {images.map((x, i) => (
            <Box
              onClick={() => setActiveIndex(i)}
              key={x.src}
              component={'button'}
              className={i === activeIndex ? 'active' : undefined}
              sx={{
                width: 15,
                height: 15,
                backgroundColor: 'white',
                borderRadius: '50%',
                border: '1px solid white',
                transition: '300ms',
                cursor: 'pointer',
                boxShadow: 3,
                '&.active': {
                  backgroundColor: theme.palette.primary.main,
                  transform: 'scale(1.1)',
                },
                '&:hover:not(.active)': {
                  backgroundColor: lighten(theme.palette.primary.main, 0.7),
                },
              }}
            ></Box>
          ))}
        </Stack>
      </Box>
      <IconButton onClick={next}>
        <Icon fontSize='large' name='keyboard_arrow_right' />
      </IconButton>
    </Stack>
  );
  // <ImageGallery
  //           showPlayButton={false}
  //           infinite
  //           slideInterval={5000}
  //           showFullscreenButton={false}
  //           showThumbnails={false}
  //           showBullets
  //           items={clientLogos}
  //           additionalClass='clients-gallery'
  //         />
};
