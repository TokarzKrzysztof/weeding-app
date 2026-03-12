import { ImagesSet } from 'src/pages/Home/ImagesSet';
import { Typography } from 'src/ui-components';

export type HorsensContentProps = {};

export const HorsensContent = ({ ...props }: HorsensContentProps) => {
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
        Do Horsens wybraliśmy się z okazji urodzin Krzyśka. 🎂 Spędzaliśmy tam czas z przyjaciółką
        Sary i jej mężem, którzy mieszkają w Danii.
        <br /> Mimo że samo miasto nie oferowało zbyt wielu atrakcji do zwiedzania, był to bardzo
        udany wyjazd. Najważniejsze było to, że mogliśmy spędzić ten czas w świetnym towarzystwie,
        dużo rozmawiać, śmiać się i po prostu dobrze się bawić. 😊
      </Typography>
    </>
  );
};
