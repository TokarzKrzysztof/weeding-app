import { ImagesSet } from 'src/pages/Home/ImagesSet';
import { Typography } from 'src/ui-components';

export type SideContentProps = {};

export const SideContent = ({ ...props }: SideContentProps) => {
  return (
    <>
      <ImagesSet
        images={['miniaturki/ateny.jpg', 'miniaturki/ateny.jpg', 'miniaturki/ateny.jpg']}
      />
      <Typography my={3}>
        Side to popularny kurort w Turcji, położony nad Morzem Śródziemnym. Miejsce słynie z
        pięknych plaż, ciepłego klimatu oraz starożytnych ruin, które można spotkać niemal na każdym
        kroku – w tym imponującej świątyni Apollina położonej tuż przy morzu. Miasto łączy wakacyjny
        wypoczynek z historią sięgającą czasów starożytnej Grecji i Rzymu. 🌅
      </Typography>
      <ImagesSet
        images={['miniaturki/ateny.jpg', 'miniaturki/ateny.jpg', 'miniaturki/ateny.jpg']}
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
