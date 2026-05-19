import { ImagesSet } from 'src/pages/Trips/ImagesSet';
import { Typography } from 'src/ui-components';

export type SideContentProps = {};

export const SideContent = ({ ...props }: SideContentProps) => {
  return (
    <>
      <ImagesSet
        images={['turcja/side-1-1', 'turcja/side-1-2', 'turcja/side-1-3', 'turcja/side-1-4']}
      />
      <Typography my={3}>
        Side to popularny kurort w Turcji, położony nad Morzem Śródziemnym. Miejsce słynie z
        pięknych plaż, ciepłego klimatu oraz starożytnych ruin, które można spotkać niemal na każdym
        kroku – w tym imponującej świątyni Apollina położonej tuż przy morzu. Miasto łączy wakacyjny
        wypoczynek z historią sięgającą czasów starożytnej Grecji i Rzymu. 🌅
      </Typography>
      <ImagesSet
        images={['turcja/side-2-1', 'turcja/side-2-2', 'turcja/side-2-3', 'turcja/side-2-4']}
      />
      <Typography my={3}>
        Wyjazd do Side był naszą pierwszą wspólną wycieczką w formule all inclusive. Samo miejsce
        bardzo nam się podobało - piękna pogoda, atrakcje, ciepłe morze i dużo czasu na odpoczynek sprawiły,
        że był to przyjemny wyjazd. ☀️
        <br /> Niestety sam kraj nie przypadł nam aż tak do gustu, głównie ze względu na
        doświadczenia z lokalnymi sprzedawcami. Na straganach często próbowano nas naciągać lub
        przekonywać do zakupów w dość nachalny sposób, co trochę popsuło nam ogólne wrażenie z
        pobytu.
      </Typography>
    </>
  );
};
