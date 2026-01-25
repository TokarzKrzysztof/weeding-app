import { Link } from 'react-router-dom';
import { NumeredList } from 'src/components/NumeredList';
import { Images } from 'src/components/sarka/Images';
import { useDocumentTitle } from 'src/hooks/useDocumentTitle';
import { GalleryImage } from 'src/hooks/useGallery';
import { AppRoutes } from 'src/router/app-routes';
import { Box, buildImgSrc, Button, Typography } from 'src/ui-components';
import { ImagePath, OfferImgCount } from 'src/_generated';

export const OfferFood = () => {
  const images: GalleryImage[] = Array(OfferImgCount.Food)
    .fill(null)
    .map((x, i) => ({
      src: buildImgSrc(`oferta/kulinarna/${i + 1}.jpg` as ImagePath),
      fullSizeSrc: buildImgSrc(`oferta/kulinarna/pelnowymiarowe/${i + 1}.jpg` as ImagePath),
    }));

  useDocumentTitle('Oferta fotografii kulinarnej');
  return (
    <>
      <Typography type='title'>Fotografia kulinarna</Typography>
      <Typography mt={6}>
        Zatrzymaj smak na zdjęciu! Fotografia kulinarna to więcej niż estetyka – to sposób, by apetyczne detale mówiły same za siebie. Profesjonalne ujęcia potraw sprawią, że Twoje menu, blog lub social media będą kusić już od pierwszego spojrzenia.
      </Typography>
      <Typography type='sub-title' mt={10} mb={3}>
        Dlaczego warto?
      </Typography>
      <NumeredList
        data={[
          {
            title: 'Apetyt zaczyna się od zdjęcia',
            text: 'Zdjęcia, które pobudzają zmysły — zapach, smak i tekstura potraw uchwycone w jednym kadrze. To one decydują, czy klient zdecyduje się na rezerwację lub zakup.',
          },
          {
            title: 'Współpraca z myślą o Twoim menu',
            text: 'Każda sesja jest dopasowana do charakteru kuchni, klimatu lokalu i oczekiwań gości. Tworzę fotografie, które opowiadają historię Twojej kuchni i wzmacniają jej autentyczność.',
          },
          {
            title: 'Profesjonalna stylizacja i kompozycja',
            text: 'Dbam nie tylko o samo zdjęcie, ale też o ułożenie potrawy, rekwizyty i klimat. Stylizacja jedzenia to sztuka, którą łączę z techniczną precyzją zdjęcia.',
          },
          {
            title: 'Idealne zdjęcia do mediów, karty dań i reklamy',
            text: 'Zyskujesz uniwersalny materiał wizualny: do strony internetowej, Instagrama, Uber Eats, czy materiałów promocyjnych. Spójność wizualna to krok do zbudowania silnej marki restauracyjnej.',
          },
          {
            title: 'Doświadczenie w pracy z kuchnią',
            text: 'Rozumiem dynamikę pracy w gastronomii — działam sprawnie, z szacunkiem dla kucharzy i rytmu lokalu. Wiem, kiedy złapać idealny moment na zdjęcie.',
          },
        ]}
      />
      <Typography type='sub-title' mt={10} mb={3}>
        Dla kogo?
      </Typography>
      <NumeredList
        data={[
          {
            title: 'Restauracje, kawiarnie i bistro',
            text: 'Dla lokali gastronomicznych, które chcą pokazać swoje dania w smakowity i przyciągający sposób — do menu, social mediów, stron internetowych i materiałów promocyjnych.',
          },
          {
            title: 'Producenci i marki spożywcze',
            text: 'Od lokalnych przetwórni po większe marki — zdjęcia przedstawiające produkty w kontekście ich użycia, wartości odżywczych i estetyki opakowań.',
          },
          {
            title: 'Firmy cateringowe i dostawcy posiłków',
            text: 'Profesjonalne sesje potraw gotowych do dowozu lub serwowanych na miejscu — dla stron zamówień, katalogów i ulotek.',
          },
          {
            title: 'Twórcy kulinarnych treści i influencerzy',
            text: 'Blogerzy, food influencerzy i twórcy przepisów, którzy potrzebują estetycznych kadrów do Instagrama, bloga, e-booków czy współprac komercyjnych.',
          },
          {
            title: 'Wydawnictwa i media kulinarne',
            text: 'Profesjonalne zdjęcia do książek kucharskich, magazynów, artykułów i treści redakcyjnych związanych z jedzeniem.',
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
          to={AppRoutes.PortfolioFood({ scrollAction: 'below-header-smooth' })}
        >
          Zobacz więcej zdjęc
        </Button>
      </Box>
    </>
  );
};

OfferFood.displayName = 'OfferFood';
