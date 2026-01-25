import { useState } from 'react';
import { Img } from 'src/components/Img';
import { Images } from 'src/components/sarka/Images';
import { ShowOnScroll } from 'src/components/sarka/ShowOnScroll';
import { useDeviceMediaQuery } from 'src/hooks/useDeviceMediaQuery';
import { GalleryImage } from 'src/hooks/useGallery';
import { Box, buildImgSrc, Button, Icon, Stack, Typography } from 'src/ui-components';
import { HomeOpinionsImgCount, ImagePath } from 'src/_generated';

export type HomeOpinionsProps = {};
export const HomeOpinions = ({ ...props }: HomeOpinionsProps) => {
  const { isDesktop } = useDeviceMediaQuery();
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <Typography type='sub-title'>Opinie</Typography>
      <Stack
        sx={{
          flexWrap: 'wrap',
          justifyContent: 'center',
          mt: 4,
          gap: 3,
        }}
        direction={isDesktop ? 'row' : 'column'}
      >
        <OpinionBox
          logoWidth={150}
          imagesCount={HomeOpinionsImgCount.MeltMeTender}
          type='company'
          name='melt-me-tender'
          text='Bardzo polecam współpracę z Sarą, która idealnie zrealizowała naszą wizję i przygotowała przepiękną sesję z wykorzystaniem produktów marki Melt me tender. Od samego początku Sara wykazuje się pełnym profesjonalizmem, od przygotowania mood boardu po obróbkę i przesłanie gotowych plików. Na każdym etapie realizacji kontakt jest bez zastrzeżeń. To była prawdziwa przyjemność, z pewnością będziemy wracać z nowymi projektami.'
        />
        <OpinionBox
          logoWidth={170}
          imagesCount={HomeOpinionsImgCount.Argasinscy}
          type='company'
          name='argasinscy'
          text='Polecamy Panią Sarę Waśko! Pełen profesjonalizm, punktualność, wysoka kultura, super zdjęcia produktowe'
        />
        {showMore && (
          <OpinionBox
            imagesCount={HomeOpinionsImgCount.PaulinaPapiez}
            name='paulina-papiez'
            type='private'
            fullName='Paulina Papież-Rutkowska'
            text='Moje boxy wpadły w ręce  Fotografia produktowa & kulinarna - Sara Waśko. 
                Ja jestem zachwycona, dlatego z całego serca polecam Wam Sarę!
                Młoda, usmiechnięta, ambitna dziewczyna, która niesamowicie dba o każdy szczegół przy robieniu zdjęć.
                Jest bardzo dokładna, profesjonalna i świetnie przygotowana do każdej sesji, a kontakt z Sarą to czysta przyjemność!
                Sara bardzo dziękuję za wykonanie tej sesji. 
                Za każdym razem jak oglądam te zdjęcia to uśmiech sam pokazuje się na mojej twarzy 🙂'
          />
        )}
      </Stack>

      {!showMore && (
        <Box mt={5}>
          <Button variant='outlined' onClick={() => setShowMore(true)}>
            Zobacz więcej opinii
          </Button>
        </Box>
      )}
    </>
  );
};

const OpinionBox = ({
  name,
  fullName,
  text,
  imagesCount,
  logoWidth,
  type,
}: {
  text: string;
  imagesCount: number;
} & (
  | { type: 'company'; name: 'melt-me-tender' | 'argasinscy'; logoWidth: number; fullName?: never }
  | { type: 'private'; name: 'paulina-papiez'; fullName: string; logoWidth?: never }
)) => {
  const { isDesktop } = useDeviceMediaQuery();
  const images: GalleryImage[] = Array(imagesCount)
    .fill(null)
    .map((_, i) => {
      return {
        src: buildImgSrc(`glowna/opinie/${name}${i + 1}.jpg` as ImagePath),
        fullSizeSrc: buildImgSrc(`glowna/opinie/pelnowymiarowe/${name}${i + 1}.jpg` as ImagePath),
      };
    });

  return (
    <ShowOnScroll>
      <Stack
        sx={{
          flexDirection: 'column',
          boxShadow: 4,
          borderRadius: 3,
          alignItems: 'center',
          p: 3,
          pt: 3,
          flexGrow: 1,
          flexShrink: 0,
          flexBasis: '33.34%',
          maxWidth: isDesktop ? '50%' : undefined,
        }}
      >
        {type === 'company' ? (
          <Img
            sx={{ objectFit: 'contain', maxWidth: logoWidth, mb: 3 }}
            src={buildImgSrc(`loga-klientow/${name}.png`)}
          />
        ) : (
          <Box textAlign={'center'} mb={3}>
            <Icon name={'person'} sx={{ fontSize: 70 }} />
            <Typography type='large-text' fontWeight={'bold'}>
              {fullName}
            </Typography>
          </Box>
        )}
        <Icon name='format_quote_rounded' fontSize='large' color='primary'></Icon>
        <Typography sx={{ fontStyle: 'italic', flexGrow: 1 }}>{text}</Typography>
        <Images
          sx={{ maxWidth: 350, margin: '0 auto', pt: 4, px: 2 }}
          images={images}
          predefined='vertical-gallery-minimal'
          cols={3}
          skipAnimation
          limit={3}
          imageContainerSx={{ borderRadius: 1, maxWidth: 100 }}
        />
      </Stack>
    </ShowOnScroll>
  );
};
