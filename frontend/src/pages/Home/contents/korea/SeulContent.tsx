import { ImagesSet } from 'src/pages/Trips/ImagesSet';
import { Typography } from 'src/ui-components';

export type SeulContentProps = {};

export const SeulContent = ({ ...props }: SeulContentProps) => {
  return (
    <>
      <ImagesSet images={['korea/seul-1-1', 'korea/seul-1-2', 'korea/seul-1-3']} />
      <Typography my={3}>
        Seul to stolica Korei Południowej i jedno z najbardziej nowoczesnych miast świata. Słynie z
        imponujących wieżowców, tętniących życiem ulic, nowoczesnej technologii oraz bogatej kultury
        K-popu. Jednocześnie można tu znaleźć zabytkowe pałace, tradycyjne świątynie i klimatyczne
        dzielnice pokazujące historię kraju. Miasto zachwyca energią, różnorodnością i wyjątkowym
        połączeniem tradycji z nowoczesnością. 🌆
      </Typography>
      <ImagesSet images={['korea/seul-2-1', 'korea/seul-2-2']} />
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
