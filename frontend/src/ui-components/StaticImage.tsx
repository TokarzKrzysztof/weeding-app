import { ImagePath } from 'src/_generated';
import { Box, BoxProps } from './Box';

export const buildImgSrc = (path: ImagePath) => {
  return `/images/${path}`;
};

const alts = [
  ['logo-icon.svg', 'Logo ikona'],
  ['logo-text-white.svg', 'Logo tekstowe białe'],
  ['logo-text-black.svg', 'Logo tekstowe czarne'],
  ['logo-text-preview.png', 'Logo Meetyo do podglądu'],
  ['people.jpg', 'Ludzie'],
  ['anonymous.png', 'Ikona anonimowej osoby'],
  ['open-external-step-1.jpg', 'Instrukcja otwierania w zewnętrznej przeglądarce - krok 1'],
  ['open-external-step-2.jpg', 'Instrukcja otwierania w zewnętrznej przeglądarce - krok 2'],
  ['about-me.jpg', 'Zdjęcie o mnie'],
  ['logo/multipak.png', 'Multipak'],
  ['logo/argasinscy.png', 'Argasińscy'],
  ['logo/odlotowe-party.jpg', 'Odlotowe party'],
  ['logo/melt-me-tender.png', 'Melt me tender'],
  ['photos.jpg', 'Zdjęcie'],
  ['pionowe1.jpg', 'Zdjęcie'],
  ['poziome1.jpg', 'Zdjęcie'],
] as const;
export type ImageName = (typeof alts)[number][0];

export type StaticImageProps = {
  name: ImageName;
} & Omit<BoxProps<'img'>, 'ref'>;

export const StaticImage = ({ name, ...props }: StaticImageProps) => {
  return (
    // from public folder
    <Box
      component='img'
      maxWidth='100%'
      maxHeight='100%'
      alt={alts.find(([imageName, alt]) => name === imageName)?.[1]}
      {...props}
    />
  );
};
