import { ImagesSet } from 'src/pages/Home/ImagesSet';
import { Typography } from 'src/ui-components';

export type ArdspachContentProps = {};

export const ArdspachContent = ({ ...props }: ArdspachContentProps) => {
  return (
    <>
      <ImagesSet
        images={['miniaturki/ateny.jpg', 'miniaturki/ateny.jpg', 'miniaturki/ateny.jpg']}
      />
      <Typography my={3}>
        Adršpach to malownicza miejscowość w Czechach, znana przede wszystkim z niezwykłego Skalnego
        Miasta. Jest to labirynt wysokich, monumentalnych formacji skalnych, które powstały przez
        tysiące lat w wyniku działania wody i wiatru. Wąskie przejścia, skalne wieże oraz piękne
        widoki sprawiają, że jest to jedno z najbardziej wyjątkowych miejsc przyrodniczych w tej
        części Europy. ⛰️
      </Typography>
      <ImagesSet
        images={['miniaturki/ateny.jpg', 'miniaturki/ateny.jpg', 'miniaturki/ateny.jpg']}
      />
      <Typography my={3}>
        Do Adršpachu wybraliśmy się na rodzinny wyjazd. Spacer po Skalnym Mieście był niesamowitym
        doświadczeniem - ogromne skały i wąskie przejścia między nimi zrobiły na nas naprawdę duże
        wrażenie.
        <br /> Momentami czuliśmy się jak w zupełnie innym świecie, a cały spacer był jedną z tych
        wycieczek, które długo zostają w pamięci. 😊
      </Typography>
    </>
  );
};
