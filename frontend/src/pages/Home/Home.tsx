import { Link } from 'react-router-dom';
import { ContactBox } from 'src/components/ContactBox';
import { Img } from 'src/components/Img';
import { ImageGallery } from 'src/components/sarka/ImageGallery';
import { SelectionBoxes } from 'src/components/sarka/SelectionBoxes';
import { useDeviceMediaQuery } from 'src/hooks/useDeviceMediaQuery';
import { useDocumentTitle } from 'src/hooks/useDocumentTitle';
import { HomeOpinions } from 'src/pages/Home/HomeOpinions';
import { AppRoutes } from 'src/router/app-routes';
import { Box, buildImgSrc, Button, Container, Stack, Typography } from 'src/ui-components';

const clientLogos = [
  { src: buildImgSrc('loga-klientow/melt-me-tender.png') },
  { src: buildImgSrc('loga-klientow/multipak.png') },
  { src: buildImgSrc('loga-klientow/argasinscy.png') },
  { src: buildImgSrc('loga-klientow/odlotowe-party.png') },
];

export const Home = () => {
  const { isDesktop } = useDeviceMediaQuery();

  useDocumentTitle(null);
  return (
    <>
      <Container>
        <Stack
          direction={isDesktop ? 'row' : 'column'}
          justifyContent={'space-between'}
          alignItems={'center'}
          gap={isDesktop ? 6 : 3}
        >
          <Box textAlign={'center'} flexGrow={1}>
            <Typography type='title' component={'h1'}>
              Zdjęcia, które mówią więcej!
            </Typography>
            <Typography mt={4}>
              Cześć! Mam na imię Sara i zatrzymuję smaki w kadrze. Tworzę zdjęcia kulinarne,
              produktowe i reportaże, które przyciągają uwagę i budzą apetyt. Pracuję w domowym
              studio, lokalach i podczas wydarzeń - zawsze z pasją i dbałością o detale. Jeśli
              chcesz, by Twoje potrawy lub produkty wyglądały tak dobrze, jak smakują - jesteś w
              dobrym miejscu.
            </Typography>
            {isDesktop && (
              <Button variant='outlined' sx={{ mt: 4 }} component={Link} to={AppRoutes.AboutMe()}>
                Więcej o mnie
              </Button>
            )}
          </Box>
          <Img
            sx={{ maxHeight: 600, borderRadius: 5, maxWidth: '100%' }}
            src={buildImgSrc('glowna/o-mnie.jpg')}
          />
          {!isDesktop && (
            <Button variant='outlined' component={Link} to={AppRoutes.AboutMe()}>
              Więcej o mnie
            </Button>
          )}
        </Stack>
        <Box mt={6} textAlign={'center'}>
          <Typography type='sub-title'>Oferta</Typography>
          <Typography mt={1} mb={3} component={'p'} variant='body2'>
            Co mogę dla Ciebie zrobić?
          </Typography>
          <SelectionBoxes>
            <SelectionBoxes.Item
              title='Fotografia kulinarna'
              text='Oddaj smak w obrazie. Uchwycę detale i klimat, które sprawią, że Twoje dania będą wyglądać tak dobrze, jak smakują.'
              imgSrc='glowna/oferta-kulinarna.jpg'
              to={AppRoutes.OfferFood({ scrollAction: 'below-header-smooth' })}
            />
            <SelectionBoxes.Item
              title='Fotografia produktowa'
              text='Produkty, które przyciągają spojrzenia. Zadbam o to, by każdy detal pracował na Twój sukces.'
              imgSrc='glowna/oferta-produktowa.jpg'
              to={AppRoutes.OfferProduct({ scrollAction: 'below-header-smooth' })}
            />
            <SelectionBoxes.Item
              title='Fotografia reportażowa'
              text='Prawdziwe emocje i autentyczne chwile. Uwiecznię wydarzenia tak, by można było do nich wracać bez końca.'
              imgSrc='glowna/oferta-reportazowa.jpg'
              to={AppRoutes.OfferReportage({ scrollAction: 'below-header-smooth' })}
            />
          </SelectionBoxes>
        </Box>
        <Box mt={6} textAlign={'center'}>
          <Typography type='sub-title'>Moi klienci</Typography>
          <Box mt={1}>
            <ImageGallery sx={{ maxWidth: 600, margin: '0 auto' }} images={clientLogos} />
          </Box>
        </Box>
        <Box mt={6} textAlign='center'>
          <HomeOpinions />
        </Box>
      </Container>
      <ContactBox />
    </>
  );
};

Home.displayName = 'Home';
