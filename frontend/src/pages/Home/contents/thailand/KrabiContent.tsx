import { ImagesSet } from 'src/pages/Home/ImagesSet';
import { Typography } from 'src/ui-components';

export type KrabiContentProps = {};

export const KrabiContent = ({ ...props }: KrabiContentProps) => {
  return (
    <>
      <ImagesSet
        images={['miniaturki/ateny.jpg', 'miniaturki/ateny.jpg', 'miniaturki/ateny.jpg']}
      />
      <Typography my={3}>
        Ao Nang to popularna miejscowość turystyczna w prowincji Krabi w Tajlandii, znana z pięknych
        plaż, wysokich wapiennych klifów i spokojniejszej atmosfery niż w wielu innych kurortach.
        Jest też świetną bazą wypadową na pobliskie wyspy i do parków narodowych. Okolica zachwyca
        tropikalną przyrodą, turkusową wodą i spektakularnymi krajobrazami. 🌴
      </Typography>
      <ImagesSet
        images={['miniaturki/ateny.jpg', 'miniaturki/ateny.jpg', 'miniaturki/ateny.jpg']}
      />
      <Typography my={3}>
        Ao Nang w Krabi było ostatnim punktem naszej podróży po Tajlandii i jednocześnie
        zdecydowanie najspokojniejszym miejscem podczas całego wyjazdu. Po intensywnych dniach w
        innych częściach kraju mogliśmy tam trochę zwolnić i naprawdę odpocząć.
        <br /> Mieliśmy okazję odwiedzić piękny ogród botaniczny, który zrobił na nas ogromne
        wrażenie swoją egzotyczną roślinnością. 🌿
        <br /> Jednym z najbardziej wyjątkowych przeżyć było też spotkanie ze słoniami - mogliśmy je
        karmić i zobaczyć z bliska, co było dla nas naprawdę niezapomnianym doświadczeniem. 🐘
      </Typography>
    </>
  );
};
