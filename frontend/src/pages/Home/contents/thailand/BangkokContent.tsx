import { DialogRedirectButton } from 'src/components/RedirectButton';
import { ImagesSet } from 'src/pages/Trips/ImagesSet';
import { Typography } from 'src/ui-components';

export type BangkokContentProps = {};

export const BangkokContent = ({ ...props }: BangkokContentProps) => {
  return (
    <>
      <ImagesSet
        images={['tajlandia/bangkok-1-1', 'tajlandia/bangkok-1-2', 'tajlandia/bangkok-1-3', 'tajlandia/bangkok-1-4']}
      />
      <Typography my={3}>
        Bangkok to tętniąca życiem stolica Tajlandii, pełna kontrastów i intensywnych wrażeń.
        Nowoczesne drapacze chmur stoją tu obok świątyń i ulicznych targów, a miasto słynie z
        niezwykłej energii, ulicznego jedzenia i ogromnego ruchu ulicznego.
      </Typography>

      <ImagesSet
        images={['tajlandia/bangkok-2-1', 'tajlandia/bangkok-2-2', 'tajlandia/bangkok-2-3', 'tajlandia/bangkok-2-4']}
      />
      <Typography my={3}>
        Podczas naszej podróży po Tajlandii odwiedziliśmy nie tylko stolicę, ale także trzy wyspy:{' '}
        <DialogRedirectButton miejsce='Phuket'>Phuket</DialogRedirectButton>,{' '}
        <DialogRedirectButton miejsce='Krabi'>Krabi</DialogRedirectButton> oraz{' '}
        <DialogRedirectButton miejsce='Phi Phi'>Phi Phi</DialogRedirectButton>. 🌴 <br /> Pierwsze
        zaskoczenie pojawiło się już po wyjściu z lotniska - uderzył nas ogromny buch wilgotnego
        gorąca, jakby ktoś otworzył drzwi do sauny. 🥵
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
