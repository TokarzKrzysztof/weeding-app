import { ReactNode } from 'react';
import { ImagePath } from 'src/_generated';
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
    flagSrc: 'flagi/grecja.png',
    trips: [
      {
        label: 'Ateny',
        imgSrc: 'ateny.png' as any,
        dialogContent: (
          <>
            {/* <ImagesSet
              images={['o-mnie/sekcja-2-1.jpg', 'o-mnie/sekcja-2-2.jpg', 'o-mnie/sekcja-2-3.jpg']}
            /> */}
            <Typography my={3}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum quidem magnam ullam.
              Ratione itaque quia saepe, nihil incidunt sapiente nesciunt eveniet quaerat officiis
              error expedita magnam unde quo fugiat voluptatum!
            </Typography>
            {/* <ImagesSet images={['o-mnie/sekcja-2-2.jpg', 'o-mnie/sekcja-2-3.jpg']} /> */}
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
            {/* <ImagesSet images={['o-mnie/sekcja-2-2.jpg', 'o-mnie/sekcja-2-3.jpg']} /> */}
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
    flagSrc: 'flagi/japonia.png',
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
    flagSrc: 'flagi/polska.png',
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
