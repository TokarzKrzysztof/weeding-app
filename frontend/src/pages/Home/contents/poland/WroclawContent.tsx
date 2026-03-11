import { RedirectButton } from 'src/components/RedirectButton';
import { ImagesSet } from 'src/pages/Home/ImagesSet';
import { Typography } from 'src/ui-components';

export type WroclawContentProps = {};

export const WroclawContent = ({ ...props }: WroclawContentProps) => {
  return (
    <>
      <ImagesSet
        images={['miniaturki/ateny.jpg', 'miniaturki/ateny.jpg', 'miniaturki/ateny.jpg']}
      />
      <Typography my={3}>
        Wrocław to jedno z najpiękniejszych i najbardziej klimatycznych miast w Polsce. Słynie z
        kolorowego rynku, licznych mostów i wysp na Odrze oraz charakterystycznych krasnali
        rozsianych po całym mieście. Spacerując po jego ulicach można poczuć wyjątkową atmosferę
        łączącą historię z nowoczesnym, tętniącym życiem miastem. 🌉
      </Typography>
      <ImagesSet
        images={['miniaturki/ateny.jpg', 'miniaturki/ateny.jpg', 'miniaturki/ateny.jpg']}
      />
      <Typography my={3}>
        Wrocław pokochaliśmy od pierwszego wejrzenia i od tamtej pory wracaliśmy tam już kilka razy.
        🥰 Ogromne wrażenie zrobił na nas rynek, fontanna multimedialna oraz… nadziewane precle,
        które zdecydowanie zapadły nam w pamięć.
        <br /> Jedliśmy tam również ramen, który smakiem dorównywał tym, które jedliśmy w Japonii -
        jak dotąd to nasz ulubiony w Polsce. Mowa o restauracji Ato Ramen, którego po raz pierwszy
        spróbowaliśmy wcześniej w <RedirectButton place='Łódź'>Łodzi</RedirectButton>. 🍜
        <br /> Zostawiliśmy tam też swoją kłódkę na jednym z mostów - symbolicznie, z myślą o tym,
        żeby wrócić w to miejsce za kilka lat i sprawdzić, czy nadal tam jest. 🔒
      </Typography>
    </>
  );
};
