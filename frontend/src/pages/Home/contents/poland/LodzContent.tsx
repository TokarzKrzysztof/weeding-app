import { ImagesSet } from 'src/pages/Home/ImagesSet';
import { Typography } from 'src/ui-components';

export type LodzContentProps = {};

export const LodzContent = ({ ...props }: LodzContentProps) => {
  return (
    <>
      <ImagesSet
        images={['miniaturki/ateny.jpg', 'miniaturki/ateny.jpg', 'miniaturki/ateny.jpg']}
      />
      <Typography my={3}>
        Łódź to miasto o wyjątkowej historii przemysłowej, które w ostatnich latach przeszło ogromną
        metamorfozę. Słynie z ulicy Piotrkowskiej - jednej z najdłuższych ulic handlowych w Europie
        - oraz z odrestaurowanych fabryk zamienionych w centra kultury, restauracje i miejsca
        spotkań. Miasto wyróżnia się także ciekawą architekturą i bogatą sceną kulturalną. 🏙️
      </Typography>
      <ImagesSet
        images={['miniaturki/ateny.jpg', 'miniaturki/ateny.jpg', 'miniaturki/ateny.jpg']}
      />
      <Typography my={3}>
        W Łodzi Krzysiek zjadł swój pierwszy w życiu ramen i… od razu zakochał się w tym daniu. 🍜
        To właśnie tutaj po raz pierwszy spróbowaliśmy Ato Ramen, który do dziś pozostaje jednym z
        naszych ulubionych.
        <br /> Podczas pobytu odwiedziliśmy też oceanarium, które zrobiło na nas bardzo dobre
        wrażenie. 🐠
        <br /> Zatrzymaliśmy się również w dość prestiżowym hotelu - przynajmniej tak wynikało z
        ceny - choć w rzeczywistości poza kosztami nie oferował aż tak wiele prestiżu, jak się
        spodziewaliśmy. 😅
      </Typography>
    </>
  );
};
