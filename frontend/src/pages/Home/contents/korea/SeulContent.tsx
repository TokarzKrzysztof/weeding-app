import { ImagesSet } from 'src/pages/Trips/ImagesSet';
import { Typography } from 'src/ui-components';

export type SeulContentProps = {};

export const SeulContent = ({ ...props }: SeulContentProps) => {
  return (
    <>
      <ImagesSet images={['korea/seul-1-1', 'korea/seul-1-2', 'korea/seul-1-3']} />
      <Typography my={3}>
        Seul to stolica Korei Południowej i jedno z najbardziej nowoczesnych miast świata. Słynie z
        imponujących wieżowców, tętniących życiem ulic, nowoczesnej technologii oraz bogatej kultury
        K-popu. Jednocześnie można tu znaleźć zabytkowe pałace, tradycyjne świątynie i klimatyczne
        dzielnice pokazujące historię kraju. Miasto zachwyca energią, różnorodnością i wyjątkowym
        połączeniem tradycji z nowoczesnością. 🌆
      </Typography>
      <ImagesSet images={['korea/seul-2-1', 'korea/seul-2-2']} />
      <Typography my={3}>
        Seul był wyjątkową podróżą, choć tym razem poleciałam tam jeszcze sama, ponieważ bilety
        kupiłam zanim się poznaliśmy. Wybrałam się razem ze swoją chrzestną i jej dwiema
        koleżankami, będąc najmłodszą uczestniczką całego wyjazdu. Mimo dzielącej nas odległości i
        sporej różnicy czasu, cały czas o sobie myśleliśmy i codziennie byliśmy w kontakcie. 💕 <br /> <br /> Na
        miejscu zwiedzałam miasto od rana do wieczora, robiąc codziennie nawet po 30 tysięcy kroków!
        Odwiedziłam między innymi słynną statuę „Gangnam Style” w dzielnicy Gangnam oraz mieszkałam
        tuż obok tętniącego życiem Myeongdong - jednej z najbardziej zakupowych i kolorowych części
        miasta. <br /> <br /> Miałam również okazję wziąć udział w Yeondeunghoe, czyli Festiwalu Lotosowych
        Latarni. Miasto w tym czasie było pełne ludzi, ulicami przechodziły barwne procesje, a
        wszędzie dookoła rozświetlały je tysiące kolorowych lampionów. Całe wydarzenie zrobiło na
        mnie ogromne wrażenie - atmosfera była wyjątkowa, niemal bajkowa i zupełnie inna niż
        wszystko, co widziałam wcześniej. <br /> <br /> Na początku kompletnie nie przepadałam za kimchi, ale po
        powrocie do domu tak bardzo mi zasmakowało, że teraz co jakiś czas sami robimy je w domu.
        🌶️🥬 Ten wyjazd był pełen nowych smaków, wrażeń i doświadczeń, a jednocześnie jeszcze
        bardziej utwierdził nas w tym, jak ważni jesteśmy dla siebie nawet będąc tysiące kilometrów
        od siebie.
      </Typography>
    </>
  );
};
