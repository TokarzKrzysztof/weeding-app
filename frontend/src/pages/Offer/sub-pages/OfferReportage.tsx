import { Link } from 'react-router-dom';
import { NumeredList } from 'src/components/NumeredList';
import { Images } from 'src/components/sarka/Images';
import { useDocumentTitle } from 'src/hooks/useDocumentTitle';
import { GalleryImage } from 'src/hooks/useGallery';
import { AppRoutes } from 'src/router/app-routes';
import { Box, buildImgSrc, Button, Typography } from 'src/ui-components';
import { ImagePath, OfferImgCount } from 'src/_generated';

export const OfferReportage = () => {
  const images: GalleryImage[] = Array(OfferImgCount.Reportage)
    .fill(null)
    .map((x, i) => ({
      src: buildImgSrc(`oferta/reportazowa/${i + 1}.jpg` as ImagePath),
      fullSizeSrc: buildImgSrc(`oferta/reportazowa/pelnowymiarowe/${i + 1}.jpg` as ImagePath),
    }));

  useDocumentTitle('Oferta fotografii reportażowej');
  return (
    <>
      <Typography type='title'>Fotografia reportażowa</Typography>
      <Typography mt={6}>
        Prawdziwe emocje, autentyczne chwile. Fotografia reportażowa uchwyci to, czego nie da się zaplanować – dynamikę wydarzeń, atmosferę i ludzkie historie. Idealna na eventy, śluby i projekty dokumentalne.
      </Typography>
      <Typography type='sub-title' mt={10} mb={3}>
        Dlaczego warto?
      </Typography>
      <NumeredList
        data={[
          {
            title: 'Emocje, które budują relacje',
            text: 'Naturalne, niepozowane ujęcia oddające atmosferę wydarzenia. Prawdziwe emocje, autentyczność i klimat — bo to właśnie one zostają w pamięci i przyciągają uwagę.',
          },
          {
            title: 'Opowieść o Twojej marce',
            text: 'Dobrze uchwycony reportaż pokazuje, co stoi za Twoim produktem czy lokalem — pasję, ludzi, wartości. To ogromny kapitał w komunikacji marki.',
          },
          {
            title: 'Zdjęcia gotowe do promocji i PR-u',
            text: 'Zyskujesz profesjonalny materiał do mediów społecznościowych, artykułów prasowych, relacji z wydarzeń czy kampanii promocyjnych.',
          },
          {
            title: 'Elastyczność i dyskrecja',
            text: 'Potrafię wtopić się w tłum — jestem tam, gdzie trzeba, ale nie przeszkadzam. Pracuję sprawnie, reaguję na zmiany sytuacji i łapię to, co najważniejsze.',
          },
          {
            title: 'Zapis kulinarnych chwil na lata',
            text: 'Reportaż z warsztatów, dnia otwartego, premiery menu czy świętowania sukcesów — to pamiątka, ale i narzędzie marketingowe w jednym.',
          },
        ]}
      />
      <Typography type='sub-title' mt={10} mb={3}>
        Dla kogo?
      </Typography>
      <NumeredList
        data={[
          {
            title: 'Organizatorzy wydarzeń kulinarnych',
            text: 'Relacje z festiwali jedzenia, warsztatów, degustacji, eventów branżowych – uchwycone w dynamiczny i atrakcyjny sposób.',
          },
          {
            title: 'Lokale świętujące wyjątkowe okazje',
            text: 'Otwarcia restauracji, jubileusze, premiery menu — z reportażu zostaje piękna pamiątka i cenny materiał promocyjny.',
          },
          {
            title: 'Firmy z branży gastro',
            text: 'Zdjęcia z zaplecza, zespołu, codziennego życia firmy — pokazujące, kto stoi za marką i jak wygląda autentyczna praca.',
          },
          {
            title: 'Agencje PR i marketingowe',
            text: 'Do wykorzystania w kampaniach promocyjnych, działaniach wizerunkowych oraz przy tworzeniu treści dla klientów z branży gastronomicznej.',
          },
          {
            title: 'Projekty autorskie i inicjatywy społeczne',
            text: 'Dokumentacja warsztatów, projektów edukacyjnych, akcji społecznych związanych z jedzeniem, kulturą i lokalną kuchnią.',
          },
        ]}
      />
      <Typography type='sub-title' mt={10}>
        Tak mogą wyglądać Twoje zdjęcia
      </Typography>
      <Images images={images} predefined='vertical-gallery' cols={3} />
      <Box mt={3} textAlign='center'>
        <Button
          variant='outlined'
          component={Link}
          to={AppRoutes.PortfolioReportage({ scrollAction: 'below-header-smooth' })}
        >
          Zobacz więcej zdjęc
        </Button>
      </Box>
    </>
  );
};

OfferReportage.displayName = 'OfferReportage';
