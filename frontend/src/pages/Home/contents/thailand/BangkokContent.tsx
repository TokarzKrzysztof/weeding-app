import { RedirectButton } from 'src/components/RedirectButton';
import { ImagesSet } from 'src/pages/Home/ImagesSet';
import { Typography } from 'src/ui-components';

export type BangkokContentProps = {};

export const BangkokContent = ({ ...props }: BangkokContentProps) => {
  return (
    <>
      <ImagesSet
        images={['miniaturki/ateny.jpg', 'miniaturki/ateny.jpg', 'miniaturki/ateny.jpg']}
      />
      <Typography my={3}>
        Bangkok to tętniąca życiem stolica Tajlandii, pełna kontrastów i intensywnych wrażeń.
        Nowoczesne drapacze chmur stoją tu obok świątyń i ulicznych targów, a miasto słynie z
        niezwykłej energii, ulicznego jedzenia i ogromnego ruchu ulicznego.
      </Typography>

      <ImagesSet
        images={['miniaturki/ateny.jpg', 'miniaturki/ateny.jpg', 'miniaturki/ateny.jpg']}
      />
      <Typography my={3}>
        Podczas naszej podróży po Tajlandii odwiedziliśmy nie tylko stolicę, ale także trzy wyspy:{' '}
        <RedirectButton place='Phuket'>Phuket</RedirectButton>,{' '}
        <RedirectButton place='Krabi'>Krabi</RedirectButton> oraz{' '}
        <RedirectButton place='Phi Phi'>Phi Phi</RedirectButton>. 🌴 <br /> Pierwsze zaskoczenie
        pojawiło się już po wyjściu z lotniska - uderzył nas ogromny buch wilgotnego gorąca, jakby
        ktoś otworzył drzwi do sauny. 🥵
        <br /> Bangkok zrobił na nas ogromne wrażenie swoją odmienną kulturą, bardzo niskimi cenami
        i… niesamowitym chaosem. Na słupach wisiało prawdziwe spaghetti z kabli, a korki potrafiły
        być praktycznie przez całą dobę.
        <br /> Jedliśmy też przepysznego kurczaka Cashew Nut, który do dziś wspominamy jako jedno z
        najlepszych dań z całej podróży. 🍛
        <br /> Mieliśmy też dość zabawną sytuację z taksówką - w pewnym momencie wyskoczyliśmy z
        niej w trakcie jazdy, bo kompletnie nie mogliśmy dogadać się z kierowcą i szczerze mówiąc do
        dziś nie wiemy, czy on w ogóle wiedział gdzie chcemy jechać. 😅🚕
      </Typography>
    </>
  );
};
