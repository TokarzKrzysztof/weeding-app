import { ImagesSet } from 'src/pages/Home/ImagesSet';
import { Typography } from 'src/ui-components';

export type PhiPhiContentProps = {};

export const PhiPhiContent = ({ ...props }: PhiPhiContentProps) => {
  return (
    <>
      <ImagesSet
        images={['miniaturki/ateny.jpg', 'miniaturki/ateny.jpg', 'miniaturki/ateny.jpg']}
      />
      <Typography my={3}>
        Phi Phi to niewielki archipelag wysp w Tajlandii, znany z turkusowej wody, wysokich
        wapiennych klifów i rajskich plaż. To jedno z najbardziej malowniczych miejsc w całym kraju,
        które przyciąga turystów z całego świata. Wyspa słynie również z bardzo intensywnego życia
        nocnego i luźnej, wakacyjnej atmosfery. 🌴
      </Typography>
      <ImagesSet
        images={['miniaturki/ateny.jpg', 'miniaturki/ateny.jpg', 'miniaturki/ateny.jpg']}
      />
      <Typography my={3}>
        Na Phi Phi od razu poczuliśmy wyjątkowy klimat - mimo że w powietrzu często unosił się
        zapach marihuany (która w Tajlandii jest legalna), czuliśmy się tam bezpieczniej niż w
        naszym Krakowie. 😅
        <br /> Wyspa praktycznie nie śpi - imprezy trwają tam niemal każdej nocy, przez co czasami
        trudno było się dobrze wyspać. Mimo tego właśnie tam czuliśmy się najbardziej beztrosko. Na
        Phi Phi naprawdę żyje się chwilą.
        <br /> Ciekawym doświadczeniem było też wejście do sklepu 7-Eleven - klimatyzacja była tam
        ustawiona na tak mocne chłodzenie, że po wejściu z ponad 30-stopniowego upału czuliśmy się
        dosłownie jakbyśmy weszli do lodówki. 🧊😄
        <br />
        <br /> <b>Ta wyspa jest też dla nas szczególna, bo to właśnie tutaj się zaręczyliśmy!</b> 💍🥰
        <br /> <br />
        <b>Ciekawostka:</b> Na Phi Phi praktycznie nie ma ruchu samochodowego - zamiast aut jeżdżą
        małe wózki transportowe. Co ciekawe, kierowcy zamiast trąbić często po prostu krzyczą „Phi
        Phi!” żeby ostrzec innych na drodze, co brzmiało dla nas dość zabawnie. 😄
      </Typography>
    </>
  );
};
