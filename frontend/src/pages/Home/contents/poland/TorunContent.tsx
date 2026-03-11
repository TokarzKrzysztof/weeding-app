import { ImagesSet } from 'src/pages/Home/ImagesSet';
import { Typography } from 'src/ui-components';

export type TorunContentProps = {};

export const TorunContent = ({ ...props }: TorunContentProps) => {
  return (
    <>
      <ImagesSet
        images={['miniaturki/ateny.jpg', 'miniaturki/ateny.jpg', 'miniaturki/ateny.jpg']}
      />
      <Typography my={3}>
        Toruń to jedno z najpiękniejszych historycznych miast w Polsce, położone nad Wisłą. Słynie z
        doskonale zachowanej starówki wpisanej na listę UNESCO, gotyckiej architektury oraz słynnych
        toruńskich pierników. Miasto jest również miejscem urodzenia Mikołaja Kopernika i ma
        wyjątkowy, średniowieczny klimat. 🏰
      </Typography>
      <ImagesSet
        images={['miniaturki/ateny.jpg', 'miniaturki/ateny.jpg', 'miniaturki/ateny.jpg']}
      />
      <Typography my={3}>
        W Toruniu zatrzymaliśmy się w drodze nad morze - zrobiliśmy tam nocleg, żeby trochę rozłożyć
        trasę i odpocząć. Przy okazji Sara odwiedziła też swojego stałego klienta 📷.
        <br /> Mieliśmy chwilę, żeby pospacerować po mieście i starówce. Toruń zrobił na nas bardzo
        dobre wrażenie - miasto okazało się naprawdę piękne i zdecydowanie pozytywnie nas
        zaskoczyło. 😊
      </Typography>
    </>
  );
};
