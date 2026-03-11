import { ImagesSet } from 'src/pages/Home/ImagesSet';
import { Typography } from 'src/ui-components';

export type KrakowContentProps = {};

export const KrakowContent = ({ ...props }: KrakowContentProps) => {
  return (
    <>
      <ImagesSet
        images={['miniaturki/ateny.jpg', 'miniaturki/ateny.jpg', 'miniaturki/ateny.jpg']}
      />
      <Typography my={3}>
        Kraków to jedno z najbardziej znanych i historycznych miast w Polsce, dawna stolica kraju i
        ważne centrum kultury. Słynie z pięknego rynku, Zamku Królewskiego na Wawelu oraz wyjątkowej
        atmosfery, która przyciąga turystów z całego świata. Dla wielu osób jest symbolem polskiej
        historii i tradycji. 🏰
      </Typography>
      <ImagesSet
        images={['miniaturki/ateny.jpg', 'miniaturki/ateny.jpg', 'miniaturki/ateny.jpg']}
      />
      <Typography my={3}>
        Kraków znają chyba wszyscy - w końcu nasze wesele odbywa się właśnie w Małopolsce. 😊
        <br /> Dla nas to przede wszystkim jedno z ulubionych miejsc na niedzielne wypady - często
        przyjeżdżamy tu jeść w azjatyckich restauracjach i spacerować wzdłuż Wisły.
        <br /> To także miasto, z którego zaczynała się większość naszych dalszych podróży, ponieważ
        wiele naszych dalekich lotów w świat startowało właśnie z lotniska w Balicach. ✈️
      </Typography>
    </>
  );
};
