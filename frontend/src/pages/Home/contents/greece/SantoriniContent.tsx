import { RedirectButton } from "src/components/RedirectButton";
import { ImagesSet } from "src/pages/Home/ImagesSet";
import { Typography } from "src/ui-components";

export type SantoriniContentProps = {};

export const SantoriniContent = ({ ...props }: SantoriniContentProps) => {
  return (
    <>
      <ImagesSet
        images={['miniaturki/ateny.jpg', 'miniaturki/ateny.jpg', 'miniaturki/ateny.jpg']}
      />
      <Typography my={3}>
        Santorini to jedna z najbardziej rozpoznawalnych wysp Grecji, słynąca z białych domów z
        niebieskimi kopułami, położonych na klifach nad Morzem Egejskim. Wyspa powstała na skutek
        erupcji wulkanu, dzięki czemu zachwyca wyjątkowym krajobrazem i spektakularnymi widokami na
        kalderę. Wąskie uliczki, tarasy z widokiem na morze i niezwykłe zachody słońca sprawiają, że
        jest to jedno z najbardziej malowniczych miejsc w całej Grecji. 🌅
      </Typography>
      <ImagesSet
        images={['miniaturki/ateny.jpg', 'miniaturki/ateny.jpg', 'miniaturki/ateny.jpg']}
      />
      <Typography my={3}>
        Santorini było naszym pierwszym wspólnym wyjazdem. 💞 <br />
        Odwiedziliśmy je podczas wycieczki w trakcie pobytu na{' '}
        <RedirectButton place='Kreta'>Krecie</RedirectButton>. Na miejscu czekały na nas ogromne
        tłumy turystów i długie kolejki do zrobienia zdjęć w wąskich uliczkach. Mimo tego widoki
        były po prostu nieziemskie i zdecydowanie warte zobaczenia. Spędziliśmy tam tylko kilka
        godzin, dlatego pozostał lekki niedosyt - chętnie wrócilibyśmy kiedyś na dłużej, żeby w
        pełni nacieszyć się tym wyjątkowym miejscem.
      </Typography>
    </>
  );
};
