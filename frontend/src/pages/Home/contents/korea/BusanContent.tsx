import { ImagesSet } from 'src/pages/Trips/ImagesSet';
import { buildImgSrc, Typography } from 'src/ui-components';

export type BusanContentProps = {};

export const BusanContent = ({ ...props }: BusanContentProps) => {
  return (
    <>
      <img src={buildImgSrc('korea/busan-1-1')} alt='' />
      <Typography my={3}>
        Busan to drugie co do wielkości miasto Korei Południowej i jeden z najważniejszych portów w
        kraju. Słynie z pięknych plaż, kolorowych dzielnic, świeżych owoców morza oraz malowniczych
        świątyń położonych nad morzem. Miasto łączy nowoczesną atmosferę z nadmorskim spokojem i
        oferuje zupełnie inny klimat niż Seul. To idealne miejsce, by poznać bardziej relaksującą i
        wakacyjną stronę Korei. 🌊
      </Typography>
      <ImagesSet images={['korea/busan-2-1', 'korea/busan-2-2']} />
      <Typography my={3}>
        Busan to kolejny etap mojej podróży po Korei - spędziłam tam 2 noce, po czym wróciłam z
        powrotem do Seulu. 🌊
        <br />
        <br />
        Podczas pobytu odwiedziłam słynny targ rybny, gdzie można było zobaczyć ogrom świeżych
        owoców morza i poczuć prawdziwy klimat nadmorskiego miasta. Jednym z największych wrażeń
        była też wizyta na Haeundae Beach - szerokiej, piaszczystej plaży, która robiła ogromne
        wrażenie zarówno swoim rozmiarem, jak i widokiem na wysokie, nowoczesne budynki wyrastające
        tuż przy brzegu.
        <br />
        <br />
        Ten krótki pobyt w Busanie był intensywny, pełen nowych miejsc i wrażeń, ale jednocześnie
        zostawił ogromny niedosyt. Na końcu tej podróży jeszcze bardziej pojawiło się jedno wspólne
        marzenie - żeby kiedyś wrócić do Korei już razem i odwiedzić te same miejsca, tym razem
        przeżywając je we dwoje. 💞
      </Typography>
    </>
  );
};
