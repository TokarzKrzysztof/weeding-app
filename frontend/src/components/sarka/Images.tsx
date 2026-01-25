import { alpha, CSSObject, useTheme } from '@mui/material';
import { Gallery } from 'src/components/Gallery';
import { Img } from 'src/components/Img';
import { ShowOnScroll } from 'src/components/sarka/ShowOnScroll';
import { GalleryImage, useGallery } from 'src/hooks/useGallery';
import { Box, BoxProps, Stack, StackProps, Typography } from 'src/ui-components';
import { WithNever } from 'src/utils/types/props';

export type ImagesProps = {
  images: GalleryImage[];
  sx?: StackProps['sx'];
  skipAnimation?: boolean;
  imageContainerSx?: BoxProps<'div'>['sx'];
  limit?: number;
} & (
  | WithNever<
      {
        predefined: 'vertical-gallery' | 'vertical-gallery-minimal';
        cols: 3 | 4;
      },
      'aspectRatio' | 'imageMinWidth' | 'gap'
    >
  | WithNever<
      {
        gap?: number;
        imageMinWidth?: number;
        aspectRatio?: string;
      },
      'predefined' | 'cols'
    >
);

export const Images = ({
  images,
  gap = 0.5,
  sx,
  imageMinWidth,
  aspectRatio,
  predefined,
  cols,
  skipAnimation,
  imageContainerSx,
  limit,
}: ImagesProps) => {
  const { galleryState, openGallery, closeGallery } = useGallery();

  if (predefined === 'vertical-gallery') {
    aspectRatio = '1/1.5';
    sx = { mt: 3, ...sx };
    gap = 3;
    imageMinWidth = 200;
  }
  if (predefined === 'vertical-gallery-minimal') {
    aspectRatio = '1/1.5';
    sx = { ...sx };
  }

  let imageFlexBasis: CSSObject['flexBasis'] = undefined;
  if (predefined === 'vertical-gallery' || predefined === 'vertical-gallery-minimal') {
    if (cols === 3) {
      imageFlexBasis = '25.01%';
    } else if (cols === 4) {
      imageFlexBasis = '20.01%';
    }
  }

  return (
    <>
      <Stack sx={sx} gap={gap} flexWrap={'wrap'}>
        {images.map((x, i) => (
          <ImageItem
            key={x.src}
            skipAnimation={skipAnimation}
            imageFlexBasis={imageFlexBasis}
            imageMinWidth={imageMinWidth}
            aspectRatio={aspectRatio}
            imageContainerSx={imageContainerSx}
            limit={limit}
            src={x.src}
            index={i}
            totalLength={images.length}
            onClick={() => openGallery(x.src, images)}
          />
        ))}
      </Stack>
      <Gallery state={galleryState} onClose={closeGallery} />
    </>
  );
};

const ImageItem = ({
  skipAnimation,
  imageFlexBasis,
  imageMinWidth,
  aspectRatio,
  imageContainerSx,
  limit,
  src,
  index,
  totalLength,
  onClick,
}: Pick<
  ImagesProps,
  'skipAnimation' | 'aspectRatio' | 'imageMinWidth' | 'imageContainerSx' | 'limit'
> & {
  src: string;
  imageFlexBasis: CSSObject['flexBasis'];
  index: number;
  totalLength: number;
  onClick: () => void;
}) => {
  const theme = useTheme();

  let isAboveLimit = false;
  let shouldLimit = false;
  if (limit !== undefined) {
    isAboveLimit = index > limit - 1;
    shouldLimit = limit !== undefined && index === limit - 1 && totalLength !== limit;
  }

  if (isAboveLimit) return null;
  return (
    <ShowOnScroll disabled={skipAnimation}>
      <Box
        sx={{
          flex: 1,
          flexBasis: imageFlexBasis,
          position: 'relative',
          '&:hover': {
            opacity: 0.6,
            cursor: 'pointer',
          },
          ...imageContainerSx,
        }}
        onClick={onClick}
      >
        <Img
          src={src}
          sx={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
            display: 'block',
            minWidth: imageMinWidth,
            aspectRatio,
            borderRadius: 'inherit',
          }}
        />
        {shouldLimit && (
          <Box
            sx={{
              backgroundColor: alpha('#000', 0.6),
              zIndex: 1,
              color: theme.palette.primary.contrastText,
              cursor: 'inherit',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              inset: 0,
              borderRadius: 'inherit',
            }}
          >
            <Typography sx={{ fontSize: '2rem' }}>+{totalLength - limit!}</Typography>
          </Box>
        )}
      </Box>
    </ShowOnScroll>
  );
};
