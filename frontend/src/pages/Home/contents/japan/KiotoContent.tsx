import { DialogRedirectButton } from 'src/components/RedirectButton';
import { ImagesSet } from 'src/pages/Trips/ImagesSet';
import { Typography } from 'src/ui-components';

export type KiotoContentProps = {};

export const KiotoContent = ({ ...props }: KiotoContentProps) => {
  return (
    <>
      <ImagesSet images={['japonia/kioto-1-1', 'japonia/kioto-1-2', 'japonia/kioto-1-3']} />
      <Typography my={3}>
        Kioto to dawna stolica Japonii i jedno z najważniejszych kulturowo miast w kraju. Słynie z
        licznych świątyń, tradycyjnych ogrodów, drewnianych domów oraz dzielnic, w których można
        spotkać gejsze. Miasto zachwyca spokojniejszym klimatem niż Tokio i pozwala poczuć
        prawdziwą, tradycyjną Japonię. ⛩️
      </Typography>
      <ImagesSet images={['japonia/kioto-2-1', 'japonia/kioto-2-2', 'japonia/kioto-2-3']} />
      <Typography my={3}>
        Kioto odwiedziliśmy podczas naszej podróży po Japonii razem z{' '}
        <DialogRedirectButton miejsce='Tokio'>Tokio</DialogRedirectButton> i{' '}
        <DialogRedirectButton miejsce='Osaka'>Osaką</DialogRedirectButton>. Miasto od razu zrobiło
        na nas duże wrażenie swoim spokojem, piękną architekturą i zupełnie inną atmosferą niż
        nowoczesne Tokio. Spacerując po świątyniach i ogrodach mogliśmy poczuć prawdziwy klimat
        dawnej Japonii. W Kioto spróbowaliśmy także ramenu ze słynną japońską wołowiną wagyu, a
        także lokalną tradycyjną kuchnię.
      </Typography>
    </>
  );
};
