import { ImagesSet } from 'src/pages/Home/ImagesSet';
import { Typography } from 'src/ui-components';

export type OsakaContentProps = {};

export const OsakaContent = ({ ...props }: OsakaContentProps) => {
  return (
    <>
      <ImagesSet
        images={['miniaturki/ateny.jpg', 'miniaturki/ateny.jpg', 'miniaturki/ateny.jpg']}
      />
      <Typography my={3}>
        Osaka to jedno z największych miast Japonii, znane z nowoczesnej architektury, neonowych
        ulic i wyjątkowej sceny kulinarnej. Miasto słynie z luźniejszej atmosfery niż Tokio oraz z
        dzielnicy Dotonbori, pełnej restauracji, barów i charakterystycznych neonowych reklam. Osaka
        jest często nazywana kulinarną stolicą Japonii. 🍜🏙️
      </Typography>
      <ImagesSet
        images={['miniaturki/ateny.jpg', 'miniaturki/ateny.jpg', 'miniaturki/ateny.jpg']}
      />
      <Typography my={3}>
        Osaka była ostatnim punktem naszej podróży po Japonii. Spacerowaliśmy po tętniących życiem
        ulicach i chłonęliśmy klimat miasta przed powrotem do domu.
        <br /> Największym zaskoczeniem było jednak jedzenie - właśnie tutaj zjedliśmy jak dotąd
        najlepszy ramen w naszym życiu. 🍜 Smak był tak dobry, że do dziś go wspominamy i
        porównujemy z nim wszystkie inne rameny. 😄
      </Typography>
    </>
  );
};
