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
        {/* Kioto odwiedziliśmy podczas naszej podróży po Japonii razem z{' '}
        <DialogRedirectButton miejsce='Tokio'>Tokio</DialogRedirectButton> i{' '}
        <DialogRedirectButton miejsce='Osaka'>Osaką</DialogRedirectButton>. Miasto od razu zrobiło
        na nas duże wrażenie swoim spokojem, piękną architekturą i zupełnie inną atmosferą niż
        nowoczesne Tokio. Spacerując po świątyniach i ogrodach mogliśmy poczuć prawdziwy klimat
        dawnej Japonii. W Kioto spróbowaliśmy także ramenu ze słynną japońską wołowiną wagyu, a
        także lokalną tradycyjną kuchnię. */}
      </Typography>
    </>
  );
};
