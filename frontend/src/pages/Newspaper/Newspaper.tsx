import { useTheme } from '@mui/material';
import { SlideablePage, Subpage } from 'src/components/sarka/SlideablePage';
import { HomeItem } from 'src/pages/Home/HomeItem';
import { listItems } from 'src/pages/Home/list-items';
import { AppRoutes } from 'src/router/app-routes';
import { buildImgSrc, Container, Typography } from 'src/ui-components';

export const Newspaper = () => {
  const theme = useTheme();

  const mainContent = (
    <Subpage>
      <Container>
        <Typography variant='h2' sx={{ fontSize: 20, fontWeight: 'bold', mb: 2, mt: 2 }}>
          Droga rodzino i przyjaciele 💞
        </Typography>
        <Typography sx={{ fontSize: 14, mb: 4 }}>
          W tym najważniejszym dla nas dniu otaczacie nas swoją obecnością, uśmiechem i ciepłem. To
          ogromne szczęście móc dzielić ten wyjątkowy moment z osobami, które kochamy i które są
          częścią naszej historii. Dziękujemy za Waszą obecność, życzliwość, dobre słowo i za to, że
          jesteście z nami. Za każdą łzę wzruszenia, wspólny śmiech i szalony taniec, który jeszcze
          przed nami. <br /> Z wdzięcznością i miłością, <br />
          <b style={{ fontStyle: 'italic', color: theme.palette.primary.main }}>Młoda para</b>
        </Typography>
        {listItems.newspaper.map((x) => (
          <HomeItem key={x.label} label={x.label} to={x.to} iconStart={x.icon}></HomeItem>
        ))}
      </Container>
    </Subpage>
  );

  return (
    <SlideablePage
      isSubpage
      rootContent={mainContent}
      rootUrl={AppRoutes.Newspaper()}
      childRootSx={{
        backgroundImage: `linear-gradient(rgba(255,255,255, 0.7), rgba(255,255,255, 0.7)), url(${buildImgSrc('tła/gazetka.jpg')})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
  );
};

Newspaper.displayName = 'Newspaper';
