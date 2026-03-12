import { RedirectButton } from 'src/components/RedirectButton';
import { ImagesSet } from 'src/pages/Home/ImagesSet';
import { Typography } from 'src/ui-components';

export const AthensContent = () => {
  return (
    <>
      <ImagesSet
        images={['miniaturki/ateny.jpg', 'miniaturki/ateny.jpg', 'miniaturki/ateny.jpg']}
      />
      <Typography my={3}>
        Ateny to stolica Grecji i jedno z najstarszych miast świata. Uznawane są za kolebkę
        demokracji i ważne centrum starożytnej kultury. Nad miastem góruje Akropol Ateński z
        imponującym Partenonem - jednym z najsłynniejszych zabytków starożytnej Grecji. Współczesne
        Ateny łączą bogatą historię z życiem pełnym śródziemnomorskiego klimatu.
      </Typography>

      <ImagesSet
        images={['miniaturki/ateny.jpg', 'miniaturki/ateny.jpg', 'miniaturki/ateny.jpg']}
      />
      <Typography my={3}>
        Byliśmy tam razem z rodzicami Krzyśka i jego siostrą, a decyzja o wyjeździe była bardzo
        spontaniczna - po prostu trafiliśmy na dobrą okazję.
        <br /> Zwiedziliśmy Akropol i najważniejsze miejsca w stolicy, a także wybraliśmy się do
        oddalonych o około 2 godziny drogi od Aten <RedirectButton place='Delfy / Arachova'>Delf</RedirectButton>. Na miejscu wypożyczyliśmy samochód - jazda
        po Atenach bywała momentami dość chaotyczna, ale ostatecznie daliśmy radę! 🚗
        <br />
        <br />
        <b>Ciekawostka:</b> Nocowaliśmy w podobno najbardziej niebezpiecznej dzielnicy Aten, pełnej
        narkomanów. Nikogo tam nie dziwiło, że o 11:00 w środku dnia ktoś stał na ulicy i wciągał
        coś przez nos. 🤣
      </Typography>
    </>
  );
};
