import { DialogRedirectButton } from 'src/components/RedirectButton';
import { ImagesSet } from 'src/pages/Trips/ImagesSet';
import { Typography } from 'src/ui-components';

export type SymiContentProps = {};

export const SymiContent = ({ ...props }: SymiContentProps) => {
  return (
    <>
      <ImagesSet
        images={['grecja/symi-1-1', 'grecja/symi-1-2']}
      />
      <Typography my={3}>
        Symi to niewielka, malownicza wyspa w Grecji, położona niedaleko Rodos. Słynie z kolorowych
        domów ustawionych tarasowo wokół portu, które tworzą jeden z najbardziej charakterystycznych
        widoków w całym regionie. Na wyspie znajduje się także znany klasztor Michała Archanioła w
        Panormitis - ważne miejsce pielgrzymkowe z piękną dzwonnicą i bogato zdobionym wnętrzem.
      </Typography>
      <ImagesSet
        images={['grecja/symi-2-1', 'grecja/symi-2-2']}
      />
      <Typography my={3}>
        Na Symi dopłynęliśmy podczas wycieczki zorganizowanej z{' '}
        <DialogRedirectButton miejsce='Rodos'>Rodos</DialogRedirectButton>. Już gdy statek wpływał do portu,
        poczuliśmy, że to miejsce ma w sobie coś wyjątkowego. Kolorowe domki, spokojna atmosfera i
        niesamowite widoki sprawiły, że wyspa od razu zrobiła na nas duże wrażenie. Odwiedziliśmy
        też słynny klasztor, który był jednym z najciekawszych punktów całej wycieczki i tylko
        utwierdził nas w przekonaniu, że Symi ma naprawdę magiczny klimat. ✨
      </Typography>
    </>
  );
};
