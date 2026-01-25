import { useState } from 'react';
import { GalleryState } from 'src/components/Gallery';

export type GalleryImage = {
  src: string;
  fullSizeSrc: string;
};

export const useGallery = () => {
  const [galleryState, setGalleryState] = useState<GalleryState | null>(null);

  const openGallery = (startingElementSrc: string, images: GalleryImage[]) => {
    setGalleryState({
      open: true,
      index: images.findIndex((x) => x.src === startingElementSrc),
      slides: images.map((x) => ({ src: x.fullSizeSrc ?? x.src, thumbnail: x.src })),
    });
  };

  const closeGallery = () => {
    setGalleryState(null);
  };

  return { galleryState, openGallery, closeGallery };
};
