import { ReactNode } from 'react';
import { ImagePath } from 'src/_generated';
import { Typography } from 'src/ui-components';

export type Place = {
  label: string;
  imgSrc: ImagePath;
  dialogContent: ReactNode;
};

export type Country = {
  label: string;
  flagSrc: ImagePath;
  places: Place[];
};

export const data: Country[] = [
  {
    label: 'Grecja',
    flagSrc: 'flagi/grecja.png',
    places: [
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
    places: [
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
    places: [
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
  {
    label: 'Korea',
    flagSrc: 'flagi/korea.png',
    places: [],
  },
  {
    label: 'Czechy',
    flagSrc: 'flagi/czechy.png',
    places: [],
  },
  {
    label: 'Turcja',
    flagSrc: 'flagi/turcja.png',
    places: [],
  },
  {
    label: 'Tajlandia',
    flagSrc: 'flagi/tajlandia.png',
    places: [],
  },
  {
    label: 'Włochy',
    flagSrc: 'flagi/wlochy.png',
    places: [],
  },
  {
    label: 'Dania',
    flagSrc: 'flagi/dania.png',
    places: [],
  },
];

//  new Image("grecja.png"),
//  new Image("japonia.png"),
//  new Image("polska.png"),
//  new Image("korea.png"),
//  new Image("czechy.png"),
//  new Image("turcja.png"),
//  new Image("tajlandia.png"),
//  new Image("wlochy.png"),
//  new Image("dania.png"),
