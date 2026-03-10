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
        spontaniczna, gdy znaleźliśmy okazję.
        <br /> Odwiedziliśmy Akropol i najważniejsze miejsca w stolicy, w tym również oddalone o 2h
        jazdy od Aten <RedirectButton place='Delfy / Arachova'>Delfy</RedirectButton>.
        Wypożyczaliśmy auto, a jazda po Atenach była momentami chaotyczna, ale daliśmy radę!
        <br /> <br />
        <b>Ciekawostka:</b> Nocowaliśmy w najbardziej niebezpiecznej dzielnicy Aten pełnej
        narkomanów, gdzie o 11:00 w ciągu dnia normalnym było wciąganie przez nos 🤣
      </Typography>
    </>
  );
};
