import { SxProps, Theme, useTheme } from '@mui/material';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Img } from 'src/components/Img';
import { useDeviceMediaQuery } from 'src/hooks/useDeviceMediaQuery';
import { AppRoutes } from 'src/router/app-routes';
import {
  Box,
  buildImgSrc,
  Button,
  Container,
  largeTextFontSize,
  Stack,
  Typography
} from 'src/ui-components';
import { Links } from 'src/utils/constants';
import { ImagePath } from 'src/_generated';

export const AboutMePageContent = () => {
  const { isDesktop } = useDeviceMediaQuery();

  const section2Text = (
    <>
      W marcu 2024 roku postanowiłam wrócić do fotografii na poważnie – to był moment, w którym
      zdecydowałam, że pora iść za marzeniami. Naturalnie zaczęłam od fotografii kulinarnej, która
      towarzyszyła mi od lat. Inspiruje mnie świat – podróże, nowe kultury i smaki. Uwielbiam
      odkrywać nieznane miejsca, patrzeć na świat przez obiektyw i dzielić się tym, co piękne.
    </>
  );
  return (
    <Container>
      <SectionWithImage
        mt={0}
        text={
          <>
            Z wykształcenia jestem technikiem żywności, a fotografia od lat towarzyszy moim pasjom.
            Wszystko zaczęło się w 2016 roku, gdy tworzyłam autorskie przepisy, prowadziłam bloga
            kulinarnego i dzieliłam się zdjęciami potraw na Instagramie. Dwukrotnie zgłaszałam się
            też do programu MasterChef - co tylko potwierdza, jak bardzo kocham jedzenie i kreatywne
            gotowanie.
          </>
        }
        img='o-mnie/sekcja-1.jpg'
      />
      <Stack sx={{ alignItems: 'center' }}>
        {isDesktop ? (
          <>
            <Stack pr={5}>
              <Box>
                <ImageCard
                  shadowSize='normal'
                  sx={{ width: 250 }}
                  aspectRatio='1/1.5'
                  rotate={20}
                  img='o-mnie/sekcja-2-1.jpg'
                />
                <ImageCard
                  shadowSize='small'
                  sx={{ width: 230 }}
                  aspectRatio='1/1.5'
                  rotate={-2}
                  img='o-mnie/sekcja-2-3.jpg'
                />
              </Box>
              <Box pt={20}>
                <ImageCard
                  shadowSize='small'
                  sx={{ width: 200 }}
                  aspectRatio='1/1.5'
                  rotate={5}
                  img='o-mnie/sekcja-2-2.jpg'
                />
                <ImageCard
                  shadowSize='small'
                  sx={{ width: 200 }}
                  aspectRatio='1/1.5'
                  rotate={-10}
                  img='o-mnie/sekcja-2-4.jpg'
                />
              </Box>
            </Stack>
            <Typography type='large-text' sx={{ flexGrow: 1, textAlign: 'center' }}>
              {section2Text}
            </Typography>
          </>
        ) : (
          <Stack mt={6} flex={1} justifyContent={'space-between'} direction='column'>
            <Typography type='large-text' sx={{ flexGrow: 1, textAlign: 'center' }}>
              {section2Text}
            </Typography>
            <Stack mt={3}>
              <ImagesSet
                images={['o-mnie/sekcja-2-1.jpg', 'o-mnie/sekcja-2-2.jpg', 'o-mnie/sekcja-2-3.jpg']}
              />
            </Stack>
          </Stack>
        )}
      </Stack>
      <SectionWithImage
        mt={isDesktop ? 6 : 8}
        text={
          <>
            Z czasem moja fotograficzna droga poszerzyła się o zdjęcia produktowe. Szkoliłam się u
            najlepszych, zdobywałam doświadczenie i dziś mogę z pełnym zaangażowaniem tworzyć kadry,
            które budują wizerunek marki i po prostu… sprzedają! Dbam o każdy szczegół – od
            kompozycji i światła po spójność z identyfikacją wizualną klienta. Wierzę, że dobre
            zdjęcie nie tylko przyciąga wzrok, ale też opowiada historię.
          </>
        }
        img='o-mnie/sekcja-3.jpg'
        underImg={
          <Button
            component={Link}
            to={AppRoutes.Portfolio()}
            variant='text'
            sx={{ fontSize: largeTextFontSize }}
          >
            Zobacz portfolio
          </Button>
        }
      />
      <Stack mt={6} gap={5}>
        {isDesktop && (
          <Stack flex={1} sx={{ maxWidth: '30%' }}>
            <ImageCard
              shadowSize='large'
              sx={{ width: '100%' }}
              aspectRatio='1/1.4'
              rotate={-5}
              img={'o-mnie/sekcja-4-1.jpg'}
            />
          </Stack>
        )}
        <Stack flex={1} justifyContent={'space-between'} direction='column'>
          <Typography type='large-text' sx={{ flexGrow: 1, textAlign: 'center', pt: 2 }}>
            Prywatnie jestem energiczną duszą - kocham podróże, zwierzęta i chwytanie świata w
            kadrach. Swoimi odkryciami dzielę się na koncie <br />
            <Button
              variant='text'
              component={Link}
              to={Links.InstagramPrivate.url}
              target='_blank'
              sx={{ fontSize: 'inherit' }}
            >
              @{Links.InstagramPrivate.name}
            </Button>
          </Typography>
          <Stack mt={isDesktop ? 0 : 3}>
            <ImagesSet
              images={
                isDesktop
                  ? [
                      'o-mnie/sekcja-4-2.jpg',
                      'o-mnie/sekcja-4-3.jpg',
                      'o-mnie/sekcja-4-4.jpg',
                      'o-mnie/sekcja-4-5.jpg',
                    ]
                  : ['o-mnie/sekcja-4-1.jpg', 'o-mnie/sekcja-4-2.jpg', 'o-mnie/sekcja-4-3.jpg']
              }
            />
          </Stack>
        </Stack>
      </Stack>
      <SectionWithImage
        mt={isDesktop ? 16 : 8}
        text={
          <>
            W wolnych chwilach realizuję się artystycznie, dekorując torty, które można zobaczyć na
            profilu <br />
            <Button
              variant='text'
              component={Link}
              to={Links.InstagramCake.url}
              target='_blank'
              sx={{ fontSize: 'inherit' }}
            >
              @{Links.InstagramCake.name}
            </Button>
          </>
        }
        img='o-mnie/sekcja-5.jpg'
      />
    </Container>
  );
};

const ImagesSet = ({ images }: { images: ImagePath[] }) => {
  const { isDesktop } = useDeviceMediaQuery();

  const shadowSize = isDesktop ? 'normal' : 'small';
  return (
    <>
      <ImageCard
        img={images[0]}
        shadowSize={shadowSize}
        sx={{ flex: 1 }}
        aspectRatio='1/1.3'
        rotate={10}
      />
      <ImageCard
        img={images[1]}
        shadowSize={shadowSize}
        sx={{ flex: 1 }}
        aspectRatio='1/1.3'
        rotate={-3}
      />
      <ImageCard
        img={images[2]}
        shadowSize={shadowSize}
        sx={{ flex: 1 }}
        aspectRatio='1/1.3'
        rotate={10}
      />
      {images[3] && (
        <ImageCard
          img={images[3]}
          shadowSize={shadowSize}
          sx={{ flex: 1 }}
          aspectRatio='1/1.3'
          rotate={-3}
        />
      )}
    </>
  );
};

const ImageCard = ({
  aspectRatio,
  rotate,
  shadowSize,
  sx,
  img,
}: {
  aspectRatio: string;
  rotate: number;
  shadowSize: ShadowSize;
  sx?: SxProps<Theme>;
  img: ImagePath;
}) => {
  return (
    <Box
      sx={{
        position: 'relative',
        aspectRatio,
        mt: 3,
        transform: `rotate(${rotate}deg)`,
        ...sx,
      }}
    >
      <Shadows shadowSize={shadowSize} />

      <Box
        sx={{
          backgroundColor: 'white',
          p: '6%',
          width: '100%',
          height: '100%',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <Img
          src={buildImgSrc(img)}
          sx={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </Box>
    </Box>
  );
};

type ShadowSize = 'small' | 'normal' | 'large';
const Shadows = ({ shadowSize }: { shadowSize: ShadowSize }) => {
  const theme = useTheme();

  const rotate = 3;
  const reach = '50%';
  const size = '10%';
  const gutter = '4%';
  const color = theme.palette.grey[600];

  let shadowMove: string;
  if (shadowSize === 'small') {
    shadowMove = '4px';
  } else if (shadowSize === 'normal') {
    shadowMove = '6px';
  } else {
    shadowMove = '8px';
  }

  return (
    <>
      {/* shadow right */}
      <Box
        sx={{
          position: 'absolute',
          right: 0,
          width: size,
          transform: `rotate(${rotate}deg)`,
          transformOrigin: 'top right',
          backgroundColor: color,
          boxShadow: `${shadowMove} 0px 5px 0px ${color}`,
          height: reach,
          top: gutter,
        }}
      ></Box>
      {/* shadow bottom */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          width: reach,
          transform: `rotate(-${rotate}deg)`,
          transformOrigin: 'bottom left',
          backgroundColor: color,
          boxShadow: `0px ${shadowMove} 5px 0px ${color}`,
          height: size,
          left: gutter,
        }}
      ></Box>
    </>
  );
};

const SectionWithImage = ({
  text,
  img,
  mt,
  underImg,
}: {
  text: ReactNode;
  img: ImagePath;
  mt: number;
  underImg?: ReactNode;
}) => {
  const { isDesktop } = useDeviceMediaQuery();

  return (
    <Stack
      direction={isDesktop ? 'row' : 'column'}
      justifyContent={'space-between'}
      alignItems={'center'}
      gap={isDesktop ? 6 : 3}
      mt={mt}
      textAlign='center'
    >
      <Typography type='large-text' sx={{ flex: 1 }}>
        {text}
      </Typography>
      <Box sx={{ flex: 1, maxWidth: 330 }}>
        <Img src={buildImgSrc(img)} sx={{ borderRadius: 5, width: '100%' }} />
        {underImg}
      </Box>
    </Stack>
  );
};
