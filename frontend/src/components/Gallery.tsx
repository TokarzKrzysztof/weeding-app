import { GlobalStyles, useTheme } from '@mui/material';
import { useMemo } from 'react';
import { Box } from 'src/ui-components';
import Lightbox, { Plugin, SlideImage } from 'yet-another-react-lightbox';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import 'yet-another-react-lightbox/plugins/counter.css';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';

export type ExtendedSlideImage = SlideImage & { thumbnail: string };
export type PluginNames = 'Zoom' | 'Counter' | 'Thumbnails';
export type GalleryState = { open: boolean; index: number; slides: ExtendedSlideImage[] };

export type GalleryProps = {
  state: GalleryState | null;
  onClose: () => void;
  plugins?: PluginNames[];
};
export const Gallery = ({
  state,
  onClose,
  plugins = ['Zoom', 'Counter', 'Thumbnails'],
}: GalleryProps) => {
  const theme = useTheme();
  const usedPlugins = useMemo(() => {
    const arr: Plugin[] = [];
    if (plugins.includes('Zoom')) arr.push(Zoom);
    if (plugins.includes('Counter')) arr.push(Counter);
    if (plugins.includes('Thumbnails')) arr.push(Thumbnails);
    return arr;
  }, [plugins]);

  if (!state) return null;
  return (
    <>
      <GlobalStyles
        styles={{
          '.yarl__thumbnails_thumbnail_active': {
            borderColor: theme.palette.primary.main
          },
        }}
      />
      <Box
        // fix jumping
        sx={{ display: 'contents' }}
        // disable long press events propagation
        onTouchStart={(e) => e.stopPropagation()}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <Lightbox
          open={state.open}
          index={state.index}
          carousel={{ finite: state.slides.length <= 1 }}
          render={{
            buttonPrev: state.slides.length <= 1 ? () => null : undefined,
            buttonNext: state.slides.length <= 1 ? () => null : undefined,
            thumbnail: ({ slide, rect, imageFit }) => {
              return (
                <img
                  src={(slide as ExtendedSlideImage).thumbnail}
                  style={{ objectFit: imageFit, maxWidth: '100%', maxHeight: '100%' }}
                />
              );
            },
          }}
          close={onClose}
          slides={state.slides}
          plugins={usedPlugins}
        />
      </Box>
    </>
  );
};
