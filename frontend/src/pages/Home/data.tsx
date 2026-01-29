import { ReactNode } from 'react';
import { ImagePath } from 'src/_generated';
import { ArdspachContent } from 'src/pages/Home/contents/czech/ArdspachContent';
import { HorsensContent } from 'src/pages/Home/contents/denmark/HorsensContent';
import { AthensContent } from 'src/pages/Home/contents/greece/AthensContent';
import { DelfyArachovaContent } from 'src/pages/Home/contents/greece/DelfyArachovaContent';
import { KretaContent } from 'src/pages/Home/contents/greece/KretaContent';
import { RodosContent } from 'src/pages/Home/contents/greece/RodosContent';
import { SantoriniContent } from 'src/pages/Home/contents/greece/SantoriniContent';
import { SymiContent } from 'src/pages/Home/contents/greece/SymiContent';
import { WenecjaContent } from 'src/pages/Home/contents/italy/WenecjaContent';
import { KiotoContent } from 'src/pages/Home/contents/japan/KiotoContent';
import { OsakaContent } from 'src/pages/Home/contents/japan/OsakaContent';
import { TokioContent } from 'src/pages/Home/contents/japan/TokioContent';
import { BusanContent } from 'src/pages/Home/contents/korea/BusanContent';
import { SeulContent } from 'src/pages/Home/contents/korea/SeulContent';
import { KrakowContent } from 'src/pages/Home/contents/poland/KrakowContent';
import { LodzContent } from 'src/pages/Home/contents/poland/LodzContent';
import { TorunContent } from 'src/pages/Home/contents/poland/TorunContent';
import { WroclawContent } from 'src/pages/Home/contents/poland/WroclawContent';
import { BangkokContent } from 'src/pages/Home/contents/thailand/BangkokContent';
import { KrabiContent } from 'src/pages/Home/contents/thailand/KrabiContent';
import { PhiPhiContent } from 'src/pages/Home/contents/thailand/PhiPhiContent';
import { PhuketContent } from 'src/pages/Home/contents/thailand/PhuketContent';
import { SideContent } from 'src/pages/Home/contents/turkey/SideContent';

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
      { label: 'Ateny', imgSrc: 'miniaturki/ateny.jpg', dialogContent: <AthensContent /> },
      { label: 'Rodos', imgSrc: 'miniaturki/rodos.jpg', dialogContent: <RodosContent /> },
      {
        label: 'Santorini',
        imgSrc: 'miniaturki/santorini.jpg',
        dialogContent: <SantoriniContent />,
      },
      { label: 'Kreta', imgSrc: 'miniaturki/kreta.jpg', dialogContent: <KretaContent /> },
      { label: 'Symi', imgSrc: 'miniaturki/symi.jpg', dialogContent: <SymiContent /> },
      {
        label: 'Delfy / Arachova',
        imgSrc: 'miniaturki/delfy-arachova.jpg',
        dialogContent: <DelfyArachovaContent />,
      },
    ],
  },
  {
    label: 'Japonia',
    flagSrc: 'flagi/japonia.png',
    places: [
      { label: 'Tokio', imgSrc: 'miniaturki/tokio.jpg', dialogContent: <TokioContent /> },
      { label: 'Kioto', imgSrc: 'miniaturki/kioto.jpg', dialogContent: <KiotoContent /> },
      { label: 'Osaka', imgSrc: 'miniaturki/osaka.jpg', dialogContent: <OsakaContent /> },
    ],
  },
  {
    label: 'Polska',
    flagSrc: 'flagi/polska.png',
    places: [
      { label: 'Toruń', imgSrc: 'miniaturki/torun.jpg', dialogContent: <TorunContent /> },
      { label: 'Wrocław', imgSrc: 'miniaturki/wroclaw.jpg', dialogContent: <WroclawContent /> },
      { label: 'Łódź', imgSrc: 'miniaturki/lodz.jpg', dialogContent: <LodzContent /> },
      { label: 'Kraków', imgSrc: 'miniaturki/krakow.jpg', dialogContent: <KrakowContent /> },
    ],
  },
  {
    label: 'Korea Płd.',
    flagSrc: 'flagi/korea.png',
    places: [
      { label: 'Seul', imgSrc: 'miniaturki/seul.jpg', dialogContent: <SeulContent /> },
      { label: 'Busan', imgSrc: 'miniaturki/busan.jpg', dialogContent: <BusanContent /> },
    ],
  },
  {
    label: 'Czechy',
    flagSrc: 'flagi/czechy.png',
    places: [
      { label: 'Adršpach', imgSrc: 'miniaturki/adrspach.jpg', dialogContent: <ArdspachContent /> },
    ],
  },
  {
    label: 'Turcja',
    flagSrc: 'flagi/turcja.png',
    places: [{ label: 'Side', imgSrc: 'miniaturki/side.jpg', dialogContent: <SideContent /> }],
  },
  {
    label: 'Tajlandia',
    flagSrc: 'flagi/tajlandia.png',
    places: [
      { label: 'Bangkok', imgSrc: 'miniaturki/bangkok.jpg', dialogContent: <BangkokContent /> },
      { label: 'Phuket', imgSrc: 'miniaturki/phuket.jpg', dialogContent: <PhuketContent /> },
      { label: 'Krabi', imgSrc: 'miniaturki/krabi.jpg', dialogContent: <KrabiContent /> },
      { label: 'Phi Phi', imgSrc: 'miniaturki/phiphi.jpg', dialogContent: <PhiPhiContent /> },
    ],
  },
  {
    label: 'Włochy',
    flagSrc: 'flagi/wlochy.png',
    places: [
      { label: 'Wenecja', imgSrc: 'miniaturki/wenecja.jpg', dialogContent: <WenecjaContent /> },
    ],
  },
  {
    label: 'Dania',
    flagSrc: 'flagi/dania.png',
    places: [
      { label: 'Horsens', imgSrc: 'miniaturki/horsens.jpg', dialogContent: <HorsensContent /> },
    ],
  },
];
