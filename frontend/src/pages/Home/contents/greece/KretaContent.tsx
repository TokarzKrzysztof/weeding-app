import { RedirectButton } from 'src/components/RedirectButton';
import { ImagesSet } from 'src/pages/Home/ImagesSet';
import { Typography } from 'src/ui-components';

export type KretaContentProps = {};

export const KretaContent = ({ ...props }: KretaContentProps) => {
  return (
    <>
      <ImagesSet
        images={['miniaturki/ateny.jpg', 'miniaturki/ateny.jpg', 'miniaturki/ateny.jpg']}
      />
      <Typography my={3}>
        Kreta to największa wyspa Grecji i jedno z najpopularniejszych miejsc wakacyjnych w basenie
        Morza Śródziemnego. Słynie z pięknych plaż, górskich krajobrazów oraz bogatej historii
        sięgającej czasów starożytnej cywilizacji minojskiej. Na wyspie można znaleźć zarówno
        tętniące życiem kurorty, jak i spokojne, malownicze miasteczka z prawdziwym greckim
        klimatem. 🌊☀️
      </Typography>

      <ImagesSet
        images={['miniaturki/ateny.jpg', 'miniaturki/ateny.jpg', 'miniaturki/ateny.jpg']}
      />
      <Typography my={3}>
        Kreta to nasz pierwszy wspólny wyjazd, który wspominamy bardzo ciepło. 💞 <br /> Na miejscu
        spotkaliśmy mnóstwo piesków i kotków, które chętnie dokarmialiśmy podczas spacerów. Plaża
        przy naszym hotelu była piaszczysto-kamienista, a każdego dnia mogliśmy próbować
        przepysznego greckiego jedzenia. To właśnie podczas tego wyjazdu wybraliśmy się też na
        wycieczkę na <RedirectButton place='Santorini'>Santorini</RedirectButton>, które zachwyciło nas swoimi niezwykłymi widokami.
      </Typography>
    </>
  );
};
