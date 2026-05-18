import { Subpage } from 'src/components/sarka/SlideablePage';
import { Box, Container, Typography } from 'src/ui-components';

export const Horoscope = () => {
  return (
    <Subpage>
      <Container>
        <Box sx={{ mt: 2 }}>
          <Typography sx={{ fontWeight: 'bold', fontSize: 20 }}>Waga ⚖️</Typography>
          <Typography>
            Rozkochujesz w sobie uśmiechem. Dziś balansujesz między klasą a imprezowym szaleństwem.
          </Typography>
        </Box>
        <Box sx={{ mt: 5 }}>
          <Typography sx={{ fontWeight: 'bold', fontSize: 20 }}>Skorpion 🦂</Typography>
          <Typography>
            Nieprzewidywalna namiętność wisi w powietrzu. Może z kimś z sąsiedniego stołu? Może z...
            przyszłością?
          </Typography>
        </Box>
        <Box sx={{ mt: 5 }}>
          <Typography sx={{ fontWeight: 'bold', fontSize: 20 }}>Strzelec 🏹</Typography>
          <Typography>
            Zatańczysz z kimś, kogo jeszcze nie znasz i to będzie taniec zapamiętany na długo, albo
            chociaż do poprawin. 😉
          </Typography>
        </Box>
        <Box sx={{ mt: 5 }}>
          <Typography sx={{ fontWeight: 'bold', fontSize: 20 }}>Wodnik 💦</Typography>
          <Typography>
            Pojawisz się znikąd, zatańczysz jak nikt, zadasz pytanie egzystencjalne i znikniesz.
            Jesteś legendą.
          </Typography>
        </Box>
        <Box sx={{ mt: 5 }}>
          <Typography sx={{ fontWeight: 'bold', fontSize: 20 }}>Baran 🐏</Typography>
          <Typography>
            Dziś zatańczysz tak, że buty pójdą z dymem! Możliwe zauroczenie na parkiecie, albo z
            kieliszkiem w dłoni.
          </Typography>
        </Box>
        <Box sx={{ mt: 5 }}>
          <Typography sx={{ fontWeight: 'bold', fontSize: 20 }}>Byk 🐂</Typography>
          <Typography>
            Twoje serce skradnie... tort weselny. Ale uważaj- miłość może przyjść znienacka!
          </Typography>
        </Box>
        <Box sx={{ mt: 5 }}>
          <Typography sx={{ fontWeight: 'bold', fontSize: 20 }}>Bliźnięta 👯</Typography>
          <Typography>
            Rozmowy, śmiech i flirty to Twoje naturalne środowisko. Przypadkowa rozmowa przy bufecie
            może przerodzić się w… coś bardzo ciekawego.
          </Typography>
        </Box>
        <Box sx={{ mt: 5 }}>
          <Typography sx={{ fontWeight: 'bold', fontSize: 20 }}>Koziorożec 🐐</Typography>
          <Typography>
            Na początku przyglądasz się z dystansu, ale gdy ruszysz - parkiet nie będzie już taki
            sam. Dziś możesz pozwolić sobie na odrobinę szaleństwa. Nawet dwa kawałki tortu.
          </Typography>
        </Box>
        <Box sx={{ mt: 5 }}>
          <Typography sx={{ fontWeight: 'bold', fontSize: 20 }}>Rak 🦀</Typography>
          <Typography>
            Wzruszysz się już przy drugim toaście. Przytulaj, wspominaj, kochaj - to Twój czas na
            emocje.
          </Typography>
        </Box>
        <Box sx={{ mt: 5 }}>
          <Typography sx={{ fontWeight: 'bold', fontSize: 20 }}>Lew 🦁</Typography>
          <Typography>
            Król parkietu. Królowa wieczoru. W Twojej obecności nawet światła dyskotekowe bledną.
          </Typography>
        </Box>
        <Box sx={{ mt: 5 }}>
          <Typography sx={{ fontWeight: 'bold', fontSize: 20 }}>Panna 👧</Typography>
          <Typography>
            Wszystko pod kontrolą… prawie. Ale dziś odpuść i daj się ponieść magii. Czasem najlepsze
            rzeczy są poza planem.
          </Typography>
        </Box>
        <Box sx={{ mt: 5 }}>
          <Typography sx={{ fontWeight: 'bold', fontSize: 20 }}>Ryby 🐟</Typography>
          <Typography>
            Zanurzysz się w emocjach, muzyce i opowieściach. Wesela są dla Ciebie jak sen - piękny,
            wzruszający i słodki.
          </Typography>
        </Box>
      </Container>
    </Subpage>
  );
};

Horoscope.displayName = 'Horoscope';
