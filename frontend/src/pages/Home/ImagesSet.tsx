import { SxProps, Theme, useTheme } from '@mui/material';
import { ImagePath } from 'src/_generated';
import { Img } from 'src/components/Img';
import { Box, buildImgSrc, Stack } from 'src/ui-components';

export const ImagesSet = ({ images }: { images: ImagePath[] }) => {
  return (
    <Stack>
      <ImageCard
        img={images[0]}
        sx={{ flex: 1, maxWidth: images.length === 1 ? '80%' : undefined, mx: 'auto' }}
        aspectRatio='1/1.3'
        rotate={10}
      />
      {images[1] && <ImageCard img={images[1]} sx={{ flex: 1 }} aspectRatio='1/1.3' rotate={-3} />}
      {images[2] && <ImageCard img={images[2]} sx={{ flex: 1 }} aspectRatio='1/1.3' rotate={10} />}
      {images[3] && <ImageCard img={images[3]} sx={{ flex: 1 }} aspectRatio='1/1.3' rotate={-3} />}
    </Stack>
  );
};

const ImageCard = ({
  aspectRatio,
  rotate,
  sx,
  img,
}: {
  aspectRatio: string;
  rotate: number;
  sx?: SxProps<Theme>;
  img: ImagePath;
}) => {
  return (
    <Box
      sx={{
        position: 'relative',
        aspectRatio,
        mt: 3,
        transform: `rotate(${rotate}deg)`,
        ...sx,
      }}
    >
      <Shadows shadowSize={'small'} />

      <Box
        sx={{
          backgroundColor: 'white',
          p: '6%',
          width: '100%',
          height: '100%',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <Img
          src={buildImgSrc(img)}
          sx={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </Box>
    </Box>
  );
};

type ShadowSize = 'small' | 'normal' | 'large';
const Shadows = ({ shadowSize }: { shadowSize: ShadowSize }) => {
  const theme = useTheme();

  const rotate = 3;
  const reach = '50%';
  const size = '10%';
  const gutter = '4%';
  const color = theme.palette.grey[600];

  let shadowMove: string;
  if (shadowSize === 'small') {
    shadowMove = '4px';
  } else if (shadowSize === 'normal') {
    shadowMove = '6px';
  } else {
    shadowMove = '8px';
  }

  return (
    <>
      {/* shadow right */}
      <Box
        sx={{
          position: 'absolute',
          right: 0,
          width: size,
          transform: `rotate(${rotate}deg)`,
          transformOrigin: 'top right',
          backgroundColor: color,
          boxShadow: `${shadowMove} 0px 5px 0px ${color}`,
          height: reach,
          top: gutter,
        }}
      ></Box>
      {/* shadow bottom */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          width: reach,
          transform: `rotate(-${rotate}deg)`,
          transformOrigin: 'bottom left',
          backgroundColor: color,
          boxShadow: `0px ${shadowMove} 5px 0px ${color}`,
          height: size,
          left: gutter,
        }}
      ></Box>
    </>
  );
};
