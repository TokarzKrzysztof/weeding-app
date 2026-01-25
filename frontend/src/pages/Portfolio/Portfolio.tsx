import { ContactBox } from 'src/components/ContactBox';
import { SeeAlso } from 'src/components/sarka/SeeAlso';
import { SelectionBoxes } from 'src/components/sarka/SelectionBoxes';
import { SlideablePage } from 'src/components/sarka/SlideablePage';
import { useDocumentTitle } from 'src/hooks/useDocumentTitle';
import { AppRoutes } from 'src/router/app-routes';
import { Box, Typography } from 'src/ui-components';

export const Portfolio = () => {
  const rootContent = (
    <>
      <Box textAlign={'center'}>
        <Typography type='title'>Portfolio</Typography>
        <Typography my={4}>
          Moje kadry mówią same za siebie Poniżej znajdziesz wybrane realizacje z zakresu fotografii
          kulinarnej, produktowej i reportażowej. Każda sesja to inna historia, inny klimat i inny
          cel — wspólnym mianownikiem jest dbałość o szczegóły, światło i autentyczność. Zajrzyj,
          poczuj ten smak, nastrój i jakość. <br /> A jeśli czujesz, że to kierunek, którego szukasz
          — odezwij się, chętnie stworzę coś dla Ciebie.
        </Typography>
      </Box>
      <SelectionBoxes>
        <SelectionBoxes.Item
          title='Fotografia kulinarna'
          imgSrc='portfolio/rodzaj-fotografii/kulinarna.jpg'
          to={AppRoutes.PortfolioFood({ scrollAction: 'below-header-smooth' })}
        />
        <SelectionBoxes.Item
          title='Fotografia produktowa'
          imgSrc='portfolio/rodzaj-fotografii/produktowa.jpg'
          to={AppRoutes.PortfolioProduct({ scrollAction: 'below-header-smooth' })}
        />
        <SelectionBoxes.Item
          title='Fotografia reportażowa'
          imgSrc='portfolio/rodzaj-fotografii/reportazowa.jpg'
          to={AppRoutes.PortfolioReportage({ scrollAction: 'below-header-smooth' })}
        />
      </SelectionBoxes>
      <SeeAlso to={AppRoutes.Contact()} destinationName={'Kontakt'} />
    </>
  );

  useDocumentTitle('Portfolio');
  return (
    <>
      <SlideablePage
        rootContent={rootContent}
        rootName={'Portfolio'}
        rootUrl={AppRoutes.Portfolio({ scrollAction: 'none' })}
      />
      <ContactBox />
    </>
  );
};

Portfolio.displayName = 'Portfolio';
