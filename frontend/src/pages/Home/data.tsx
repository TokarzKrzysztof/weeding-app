import { ReactNode } from 'react';
import { ImagePath } from 'src/_generated';
import { ImagesSet } from 'src/pages/AboutMe/AboutMePageContent';
import { Typography } from 'src/ui-components';

export type Trip = {
  label: string;
  imgSrc: ImagePath;
  dialogContent: ReactNode;
};

export type Country = {
  label: string;
  flagSrc: ImagePath;
  trips: Trip[];
};

export const data: Country[] = [
  {
    label: 'Grecja',
    flagSrc: 'grecja.png' as any,
    trips: [
      {
        label: 'Ateny',
        imgSrc: 'ateny.png' as any,
        dialogContent: (
          <>
            <ImagesSet
              images={['o-mnie/sekcja-2-1.jpg', 'o-mnie/sekcja-2-2.jpg', 'o-mnie/sekcja-2-3.jpg']}
            />
            <Typography my={3}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum quidem magnam ullam.
              Ratione itaque quia saepe, nihil incidunt sapiente nesciunt eveniet quaerat officiis
              error expedita magnam unde quo fugiat voluptatum!
            </Typography>
            <ImagesSet images={['o-mnie/sekcja-2-2.jpg', 'o-mnie/sekcja-2-3.jpg']} />
            <Typography my={3}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum quidem magnam ullam.
              Ratione itaque quia saepe, nihil incidunt sapiente nesciunt eveniet quaerat officiis
              error expedita magnam unde quo fugiat voluptatum!
            </Typography>
          </>
        ),
      },
      {
        label: 'Rodos',
        imgSrc: 'rodos.png' as any,
        dialogContent: (
          <>
            <ImagesSet images={['o-mnie/sekcja-2-2.jpg', 'o-mnie/sekcja-2-3.jpg']} />
            <Typography my={3}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum quidem magnam ullam.
              Ratione itaque quia saepe, nihil incidunt sapiente nesciunt eveniet quaerat officiis
              error expedita magnam unde quo fugiat voluptatum!
            </Typography>
          </>
        ),
      },
      {
        label: 'Santorini',
        imgSrc: 'santorini.png' as any,
        dialogContent: (
          <>
            <Typography>Santoriniii</Typography>
          </>
        ),
      },
    ],
  },
  {
    label: 'Japonia',
    flagSrc: 'japonia.png' as any,
    trips: [
      {
        label: 'Tokio',
        imgSrc: 'santorini.png' as any,
        dialogContent: null,
      },
    ],
  },
  {
    label: 'Polska',
    flagSrc: 'japonia.png' as any,
    trips: [
      {
        label: 'Toruń',
        imgSrc: 'santorini.png' as any,
        dialogContent: null,
      },
      {
        label: 'Wrocław',
        imgSrc: 'santorini.png' as any,
        dialogContent: null,
      },
    ],
  },
];
