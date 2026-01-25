import { Link } from 'react-router-dom';
import { NumeredList } from 'src/components/NumeredList';
import { Images } from 'src/components/sarka/Images';
import { useDocumentTitle } from 'src/hooks/useDocumentTitle';
import { GalleryImage } from 'src/hooks/useGallery';
import { AppRoutes } from 'src/router/app-routes';
import { Box, buildImgSrc, Button, Typography } from 'src/ui-components';
import { ImagePath, OfferImgCount } from 'src/_generated';

export const OfferProduct = () => {
  const images: GalleryImage[] = Array(OfferImgCount.Product)
    .fill(null)
    .map((x, i) => ({
      src: buildImgSrc(`oferta/produktowa/${i + 1}.jpg` as ImagePath),
      fullSizeSrc: buildImgSrc(`oferta/produktowa/pelnowymiarowe/${i + 1}.jpg` as ImagePath),
    }));

  useDocumentTitle('Oferta fotografii produktowej');
  return (
    <>
      <Typography type='title'>Fotografia produktowa</Typography>
      <Typography mt={6}>
        Twój produkt zasługuje na uwagę. Dzięki fotografii produktowej pokażesz jego jakość, detale i unikalność. Czyste tło, odpowiednie światło i perfekcyjne kadry pomogą zwiększyć sprzedaż i zbudować zaufanie klientów.
      </Typography>
      <Typography type='sub-title' mt={10} mb={3}>
        Dlaczego warto?
      </Typography>
      <NumeredList
        data={[
          {
            title: 'Perfekcyjne odwzorowanie detali',
            text: 'Twoje produkty zasługują na najwyższą jakość prezentacji. Dbam o ostrość, światło i kompozycję, by każdy detal wyglądał dokładnie tak, jak powinien — a nawet lepiej. Dzięki temu przyciągasz uwagę i budzisz zaufanie klientów.',
          },
          {
            title: 'Look dopasowany do Twojej marki',
            text: 'Każda sesja to indywidualne podejście — styl zdjęć dobieram tak, by harmonizował z identyfikacją wizualną Twojej marki. Tworzę zdjęcia, które nie tylko pokazują produkt, ale też wzmacniają jego przekaz i charakter.',
          },
          {
            title: 'Spójność wizualna dla social mediów i sklepu',
            text: 'Estetyczna i konsekwentna oprawa wizualna sprawia, że Twoja marka wygląda profesjonalnie i rozpoznawalnie — zarówno na Instagramie, stronie www, jak i w sklepie online.',
          },
          {
            title: 'Więcej kliknięć, większe zaufanie',
            text: 'Lepiej wyglądające produkty sprzedają się szybciej. Profesjonalne zdjęcia wpływają bezpośrednio na decyzje zakupowe klientów — wzbudzają emocje i podnoszą wiarygodność Twojej oferty.',
          },
          {
            title: 'Kompleksowa współpraca — bez stresu',
            text: 'Pomagam na każdym etapie — od pomysłu, przez stylizację, po gotowe zdjęcia. Możesz skupić się na swojej pracy, a ja zajmę się resztą. Działam sprawnie, terminowo i z pełnym zaangażowaniem.',
          },
        ]}
      />
      <Typography type='sub-title' mt={10} mb={3}>
        Dla kogo?
      </Typography>
      <NumeredList
        data={[
          {
            title: 'Restauracje, kawiarnie, firmy spożywcze',
            text: 'Profesjonalne zdjęcia menu, opakowań lub produktów lokalnych to klucz do apetytu Twoich klientów — zarówno offline, jak i w sieci.',
          },
          {
            title: 'Twórcy rękodzieła',
            text: 'Jeśli tworzysz coś własnymi rękami — biżuterię, ceramikę, świece, dekoracje — pokaż to światu tak, by Twoja praca została naprawdę doceniona.',
          },
          {
            title: 'Branża beauty i wellness',
            text: 'Kosmetyki, akcesoria, świece, olejki — produkty, które działają na zmysły, zasługują na wizualną oprawę, która podkreśli ich wyjątkowość.',
          },
          {
            title: 'Marki e-commerce',
            text: 'Zadbane zdjęcia to Twoja wizytówka w sklepie internetowym. Pomogę Ci wyróżnić się wśród konkurencji i zwiększyć sprzedaż dzięki estetycznym, profesjonalnym kadrom.',
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
          to={AppRoutes.PortfolioProduct({ scrollAction: 'below-header-smooth' })}
        >
          Zobacz więcej zdjęc
        </Button>
      </Box>
    </>
  );
};

OfferProduct.displayName = 'OfferProduct';
