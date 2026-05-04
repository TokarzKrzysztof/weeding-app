import { DialogRedirectButton } from 'src/components/RedirectButton';
import { ImagesSet } from 'src/pages/Home/ImagesSet';
import { Typography } from 'src/ui-components';

export type DelfyArachovaContentProps = {};

export const DelfyArachovaContent = ({ ...props }: DelfyArachovaContentProps) => {
  return (
    <>
      <ImagesSet
        images={['miniaturki/ateny.jpg', 'miniaturki/ateny.jpg', 'miniaturki/ateny.jpg']}
      />
      <Typography my={3}>
        Delfy to jedno z najważniejszych miejsc starożytnej Grecji, znane przede wszystkim jako
        siedziba wyroczni Apollina. W starożytności uważano je za „środek świata”, a ruiny świątyń,
        teatr i stadion robią ogromne wrażenie. Niedaleko Delf znajduje się malownicze miasteczko
        Arachova, położone u stóp gór Parnas. Znane jest z tradycyjnej architektury, wąskich uliczek
        i lokalnych przysmaków, a zimą przyciąga również miłośników sportów zimowych. ⛰️
      </Typography>
      <ImagesSet
        images={['miniaturki/ateny.jpg', 'miniaturki/ateny.jpg', 'miniaturki/ateny.jpg']}
      />
      <Typography my={3}>
        Odwiedziliśmy Delfy jako część naszej wycieczki do{' '}
        <DialogRedirectButton place='Ateny'>Aten</DialogRedirectButton>. <br />
        Zwiedzając Delfy, byliśmy zachwyceni widokiem świątyni Apollina na tle gór, a sposób, w jaki
        te monumentalne budowle powstały, pozostaje dla nas zagadką. 🌄
      </Typography>
    </>
  );
};
