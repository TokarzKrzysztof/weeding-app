import { ImagesSet } from 'src/pages/Home/ImagesSet';
import { Typography } from 'src/ui-components';

export type WenecjaContentProps = {};

export const WenecjaContent = ({ ...props }: WenecjaContentProps) => {
  return (
    <>
      <ImagesSet
        images={['miniaturki/ateny.jpg', 'miniaturki/ateny.jpg', 'miniaturki/ateny.jpg']}
      />
      <Typography my={3}>
        Wenecja to jedno z najbardziej wyjątkowych miast we Włoszech, zbudowane na ponad stu wyspach
        połączonych mostami i kanałami. Zamiast ulic główną rolę pełnią tu wodne drogi, po których
        pływają gondole i łodzie. Miasto słynie z romantycznej atmosfery, pięknej architektury i
        niezwykłego klimatu, który od lat przyciąga turystów z całego świata. 🚤
      </Typography>
      <ImagesSet
        images={['miniaturki/ateny.jpg', 'miniaturki/ateny.jpg', 'miniaturki/ateny.jpg']}
      />
      <Typography my={3}>
        Do Wenecji wybraliśmy się na krótki city break razem z naszym teamem z zumby. 💃 Była to
        świetna okazja, żeby wspólnie pozwiedzać i spędzić trochę czasu w jednym z najbardziej
        znanych miast Włoch.
        <br /> Mieliśmy okazję spróbować wspaniałej włoskiej kuchni i drinków, a także przepłynąć
        się gondolą po kanałach, co było bardzo klimatycznym doświadczeniem.
        <br /> Zaskoczyło nas natomiast coś innego – włoska siesta. W ciągu dnia wiele restauracji
        było zamkniętych i momentami naprawdę trudno było znaleźć miejsce, w którym można coś zjeść.
        😅
      </Typography>
    </>
  );
};
