import { DialogRedirectButton } from 'src/components/RedirectButton';
import { ImagesSet } from 'src/pages/Home/ImagesSet';
import { Typography } from 'src/ui-components';

export type TokioContentProps = {};

export const TokioContent = ({ ...props }: TokioContentProps) => {
  return (
    <>
      <ImagesSet
        images={['miniaturki/ateny.jpg', 'miniaturki/ateny.jpg', 'miniaturki/ateny.jpg']}
      />
      <Typography my={3}>
        Tokio to tętniąca życiem stolica Japonii, w której nowoczesne drapacze chmur łączą się z
        tradycyjnymi świątyniami i ogrodami. Miasto zachwyca ogromną różnorodnością dzielnic – od
        modnych butików w Shibuya i Harajuku, po spokojne uliczki Asakusy. Jest centrum kultury,
        technologii i kuchni, a jego unikalny rytm życia sprawia, że trudno oderwać od niego wzrok.
        🏙️
      </Typography>
      <ImagesSet
        images={['miniaturki/ateny.jpg', 'miniaturki/ateny.jpg', 'miniaturki/ateny.jpg']}
      />
      <Typography my={3}>
        Przylecieliśmy do Tokio dwa dni wcześniej, zanim dołączyliśmy do reszty grupy. Jednym z
        naszych największych wrażeń było przejście przez słynne skrzyżowanie w Shibuya - ludzi było
        tam jak mrówek, a doświadczenie samo w sobie było niesamowite. Odważnie poruszaliśmy się po
        mieście metrem na własną rękę, a Google Maps okazało się niezastąpionym przewodnikiem. 🚇
        Jeśli chodzi o jedzenie, mimo ogromnej ilości możliwości, głównie zajadaliśmy się ramenami
        xD 🍜 - i zdecydowanie nie żałujemy! Podczas wyjazdu odwiedziliśmy też{' '}
        <DialogRedirectButton place='Kioto'>Kioto</DialogRedirectButton> i{' '}
        <DialogRedirectButton place='Osaka'>Osakę</DialogRedirectButton>, które były równie fascynujące i
        zupełnie inne od tętniącego życiem Tokio.
        <br /> <br />
        <b>Ciekawostka:</b> W Tokio w godzinach szczytu w metrze można spotkać tzw. „dopychaczy” -
        pracowników stacji, których zadaniem jest delikatne, ale stanowcze dopychanie ludzi do
        wagonów, żeby wszyscy mogli wsiąść. 🚇😅 To doświadczenie jest typowe dla japońskich miast i
        pokazuje, jak ogromny jest tu tłok w metrze, a jednocześnie jak sprawnie potrafią sobie z
        tym radzić.
      </Typography>
    </>
  );
};
