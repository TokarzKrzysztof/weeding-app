import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { useTheme } from '@mui/material';
import { Subpage } from 'src/components/sarka/SlideablePage';
import { Container, Typography } from 'src/ui-components';
export const OurStory = () => {
  const theme = useTheme();

  return (
    <Subpage>
      <Container>
        <Typography sx={{ mt: 2 }}>Od jednej wiadomości wysłanej w poniedziałek.</Typography>
        <Typography sx={{ fontWeight: 'bold', mt: 1 }}>27 luty , 16:59</Typography>
        <Typography sx={{ mt: 2 }}>
          <Typography
            component={'span'}
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

        <Typography sx={{ mt: 8, fontSize: 22, fontWeight: 'bold' }}>
          Ich historia zaczęła się zupełnie niewinnie... <QuestionAnswerIcon />
        </Typography>

        <Typography sx={{ mt: 2 }}>
          (...) Był bilard, wspólny obiad i deser - czekoladowy fondant. <br /> To było pierwsze, co
          zjedli razem, dlatego nie mogło go zabraknąć również w dniu ślubu jako słodkie wspomnienie
          ich pierwszego spotkania. <br /> Już wtedy coś było inaczej... <br /> Naturalnie.
          Swobodnie. Jakby znali się od zawsze - choć nie zabrakło też lekkiego stresu.
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Na kolejne spotkanie nie trzeba było długo czekać! Trzy dni później, w Dzień Kobiet,
          wszystko stało się jasne... <b>zostali parą!</b>
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Trochę spontanicznie, trochę przypadkiem i już tak zostało. Zaręczyny przyszły później na
          drugim końcu świata, w Tajlandii.
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Bez idealnego planu, bez wybranego momentu. <br />
          Aż do pewnej nocy... <br /> Muzyka zespołu ABBA rozbrzmiewała w pobliskim klubie. Ich piosenki
          już wcześniej zajmowały w ich historii wyjątkowe miejsce - towarzyszyły im podczas
          pierwszej wspólnej podróży do Grecji. <br /> Od tamtej pory przed każdym kolejnym wyjazdem do
          tego kraju oglądają razem „Mamma Mia!”, śpiewając te same utwory, które stały się dla nich
          czymś więcej niż tylko muzyką.
        </Typography>
      </Container>
    </Subpage>
  );
};

OurStory.displayName = 'OurStory';
