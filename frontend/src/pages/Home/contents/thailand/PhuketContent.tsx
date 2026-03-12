import { ImagesSet } from 'src/pages/Home/ImagesSet';
import { Typography } from 'src/ui-components';

export type PhuketContentProps = {};

export const PhuketContent = ({ ...props }: PhuketContentProps) => {
  return (
    <>
      <ImagesSet
        images={['miniaturki/ateny.jpg', 'miniaturki/ateny.jpg', 'miniaturki/ateny.jpg']}
      />
      <Typography my={3}>
        Phuket to największa wyspa Tajlandii i jedno z najpopularniejszych miejsc turystycznych w
        kraju. Słynie z pięknych plaż, tropikalnego klimatu oraz bardzo intensywnego życia nocnego.
        Wyspa przyciąga zarówno osoby szukające spokojnego wypoczynku, jak i tych, którzy chcą
        zobaczyć słynną, imprezową stronę Tajlandii. 🌴
      </Typography>
      <ImagesSet
        images={['miniaturki/ateny.jpg', 'miniaturki/ateny.jpg', 'miniaturki/ateny.jpg']}
      />
      <Typography my={3}>
        Podczas pobytu na Phuket trafiliśmy do słynnej dzielnicy rozpusty, która w nocy zmienia
        się o 180 stopni. Wieczorem wszystko zamienia się tam w jedną wielką Sodomę i Gomorę, a w ciągu
        dnia… są tam zwykłe sklepy z rzeczami dla dzieci i pamiątkami. 😅
        <br /> Byliśmy też na słynnym ping pong show i… no cóż - fajnie było zobaczyć z ciekawości,
        ale raczej wystarczy nam tych wrażeń na całe życie. Raczej tam nie wrócimy. 😂
        <br /> Phuket kojarzy nam się jednak przede wszystkim z pysznym jedzeniem w restauracji Took
        Took. Do dziś mamy kontakt z jedną z kelnerek i lajkujemy sobie nawzajem zdjęcia na
        Facebooku. Jedliśmy tam też świetne roti i tajskie lody - były naprawdę pyszne. 🍨
        <br /> Phuket i ogólnie Tajlandia zapadła nam też w pamięć z jeszcze jednego powodu… charakterystycznego
        zapachu kanalizacji. Połączenie wilgoci, ponad 30 stopni i zapachu z kanałów potrafiło
        czasami dać się we znaki. 😅
        <br /> Mimo tego wszystkiego przeżyliśmy tam naprawdę niesamowite chwile i bardzo możliwe,
        że kiedyś jeszcze wrócimy na tą wyspę. 🌴
      </Typography>
    </>
  );
};
