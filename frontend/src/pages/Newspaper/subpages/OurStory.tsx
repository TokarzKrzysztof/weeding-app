import { useTheme } from '@mui/material';
import { Subpage } from 'src/components/sarka/SlideablePage';
import { ImagesSet } from 'src/pages/Trips/ImagesSet';
import { Box, buildImgSrc, Container, Typography } from 'src/ui-components';
export const OurStory = () => {
  const theme = useTheme();

  return (
    <Subpage>
      <Container>
        <Typography sx={{ mt: 2 }}>Od jednej wiadomości wysłanej w poniedziałek.</Typography>
        <Typography sx={{ fontWeight: 'bold', mt: 1 }}>27 luty , 16:59</Typography>
        <Typography sx={{ mt: 2 }}>
          <Typography
            component='span'
            sx={{ fontStyle: 'italic', color: theme.palette.grey[500] }}
          >
            „Cześć! Bardzo ładne torty pieczesz. Od dawna się tym zajmujesz?”
          </Typography>
          <br />- napisał Krzysiek.
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Sara była przekonana, że to zwykłe zapytanie o zamówienie... On po prostu chciał ją
          poznać.
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Kilka dni później, w niedzielę 5 marca, spotkali się po raz pierwszy...
        </Typography>
        <Box
          component='img'
          src={buildImgSrc('nasza-historia/1-1')}
          sx={{ width: '100%', mt: 2 }}
        ></Box>

        <Typography sx={{ mt: 4, fontSize: 22, fontWeight: 'bold' }}>
          Ich historia zaczęła się zupełnie niewinnie...
        </Typography>

        <Typography sx={{ mt: 2, mb: 2 }}>
          (...) Był bilard, wspólny obiad i deser - czekoladowy fondant. <br /> To było pierwsze, co
          zjedli razem, dlatego nie mogło go zabraknąć również w dniu ślubu jako słodkie wspomnienie
          ich pierwszego spotkania. <br /> Już wtedy coś było inaczej... <br /> Naturalnie.
          Swobodnie. Jakby znali się od zawsze - choć nie zabrakło też lekkiego stresu. <br /> Na
          kolejne spotkanie nie trzeba było długo czekać! Trzy dni później, w Dzień Kobiet, wszystko
          stało się jasne... <b>zostali parą!</b>
        </Typography>
        <ImagesSet images={['nasza-historia/2-1', 'nasza-historia/2-2', 'nasza-historia/2-3']} />

        <Typography sx={{ mt: 2, mb: 2 }}>
          Trochę spontanicznie, trochę przypadkiem i już tak zostało. Zaręczyny przyszły później na
          drugim końcu świata, w Tajlandii. <br /> <br />
          Bez idealnego planu, bez wybranego momentu. <br />
          Aż do pewnej nocy... <br />
          Muzyka zespołu ABBA rozbrzmiewała w pobliskim klubie. Ich piosenki już wcześniej zajmowały
          w ich historii wyjątkowe miejsce - towarzyszyły im podczas pierwszej wspólnej podróży do
          Grecji. <br />
          Od tamtej pory przed każdym kolejnym wyjazdem do tego kraju oglądają razem „Mamma Mia!”,
          śpiewając te same utwory, które stały się dla nich czymś więcej niż tylko muzyką. <br />{' '}
          <br />
          Nic więc dziwnego, że Sara wyciągnęła Krzyśka na parkiet! <br />
          Były tańce, śpiew, śmiech i drinki.
        </Typography>
        <Box
          component='img'
          src={buildImgSrc('nasza-historia/3-1')}
          sx={{ width: '100%', mt: 2 }}
        ></Box>

        <Typography sx={{ mt: 2, mb: 2 }}>
          Grubo po północy wracali do hotelu, idąc wśród bananowców. <br />
          I wtedy wszystko się zatrzymało. <br />
          „Wiesz, że bardzo Cię kocham?” - powiedział Krzysiek. <br />
          Chwilę później klęknął, wyciągnął małe, szare pudełko… i zadał najważniejsze pytanie.
        </Typography>
        <ImagesSet images={['nasza-historia/4-1', 'nasza-historia/4-2']} />

        <Typography sx={{ mt: 2, mb: 2 }}>
          Łzy pojawiły się natychmiast. <br /> Było „ tak ”. Był śmiech. I był pierścionek… trzymany
          do góry nogami! <br /> A potem biegli... <br /> W stronę plaży, gdzie morze właśnie się
          cofało. <br /> Za nimi muzyka, przed nimi cisza i oni, gdzieś daleko od domu, zaczynający
          nowy rozdział. <br /> Dziś stoją tutaj razem. <br /> Ona - w białej sukni. <br /> On - w
          garniturze. <br /> Z obrączkami na palcach i historią, która dopiero się zaczyna. <br />{' '}
          Bo w tej miłości jest wszystko: zrozumienie bez słów, spokój, ciepło i poczucie, że jest
          się w domu gdziekolwiek się jest. <br /> A przyszłość? <br /> Pełna śmiechu, podróży i
          codzienności, którą będą kochać. <br /> <b>Razem</b>
        </Typography>
        <Box
          component='img'
          src={buildImgSrc('nasza-historia/5-1')}
          sx={{ width: '100%', mt: 2 }}
        ></Box>
        <Box
          component='img'
          src={buildImgSrc('nasza-historia/6-1')}
          sx={{ width: '100%', mt: 2 }}
        ></Box>
        <ImagesSet images={['nasza-historia/6-2', 'nasza-historia/6-3', 'nasza-historia/6-4']} />
        <Box
          component='img'
          src={buildImgSrc('nasza-historia/6-5')}
          sx={{ width: '100%', mt: 2 }}
        ></Box>
      </Container>
    </Subpage>
  );
};

OurStory.displayName = 'OurStory';
