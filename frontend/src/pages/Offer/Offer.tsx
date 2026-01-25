import { ContactBox } from 'src/components/ContactBox';
import { SeeAlso } from 'src/components/sarka/SeeAlso';
import { SelectionBoxes } from 'src/components/sarka/SelectionBoxes';
import { SlideablePage } from 'src/components/sarka/SlideablePage';
import { useDocumentTitle } from 'src/hooks/useDocumentTitle';
import { AppRoutes } from 'src/router/app-routes';
import { Box, Typography } from 'src/ui-components';

export const Offer = () => {
  const rootContent = (
    <>
      <Box textAlign={'center'}>
        <Typography type='title'>Oferta</Typography>
        <Typography my={4}>
          Masz coś wyjątkowego? Pokaż to światu! Moje zdjęcia pomagają markom mówić obrazem -
          smakowicie, profesjonalnie i autentycznie. <br /> Zobacz, jak możemy razem stworzyć coś,
          co przyciąga wzrok i zostaje w pamięci.
        </Typography>
      </Box>
      <SelectionBoxes>
        <SelectionBoxes.Item
          title='Fotografia kulinarna'
          imgSrc='oferta/rodzaj-fotografii/kulinarna.jpg'
          to={AppRoutes.OfferFood({ scrollAction: 'below-header-smooth' })}
        />
        <SelectionBoxes.Item
          title='Fotografia produktowa'
          imgSrc='oferta/rodzaj-fotografii/produktowa.jpg'
          to={AppRoutes.OfferProduct({ scrollAction: 'below-header-smooth' })}
        />
        <SelectionBoxes.Item
          title='Fotografia reportażowa'
          imgSrc='oferta/rodzaj-fotografii/reportazowa.jpg'
          to={AppRoutes.OfferReportage({ scrollAction: 'below-header-smooth' })}
        />
      </SelectionBoxes>
      <SeeAlso to={AppRoutes.Portfolio()} destinationName={'Portfolio'} />
    </>
  );

  useDocumentTitle('Oferta');
  return (
    <>
      <SlideablePage
        rootContent={rootContent}
        rootName={'Oferta'}
        rootUrl={AppRoutes.Offer({ scrollAction: 'none' })}
      />
      <ContactBox />
    </>
  );
};

Offer.displayName = 'Offer';
