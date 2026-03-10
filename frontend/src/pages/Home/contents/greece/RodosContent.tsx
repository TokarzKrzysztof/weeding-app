import { ImagesSet } from 'src/pages/Home/ImagesSet';
import { Typography } from 'src/ui-components';

export const RodosContent = () => {
  return (
    <>
      <ImagesSet
        images={['miniaturki/ateny.jpg', 'miniaturki/ateny.jpg', 'miniaturki/ateny.jpg']}
      />
      <Typography my={3}>
        Rodos to jedna z największych wysp Grecji, znana z pięknych plaż, słonecznej pogody i
        bogatej historii. Jej największą atrakcją jest średniowieczne miasto Rodos, wpisane na listę
        UNESCO. Wyspa zachwyca połączeniem zabytków, malowniczych miasteczek i śródziemnomorskiego
        klimatu. 🌊☀️
      </Typography>

      <ImagesSet
        images={['miniaturki/ateny.jpg', 'miniaturki/ateny.jpg', 'miniaturki/ateny.jpg']}
      />
      <Typography my={3}>
        Rodos wspominamy jako jeden z naszych najlepszych wyjazdów. 🥰 <br /> Było trochę zwiedzania, a
        trochę beztroskiego plażowania. To właśnie tutaj po raz pierwszy zdecydowaliśmy się
        wypożyczyć samochód w obcym kraju - i była to jedna z najlepszych decyzji podczas tej
        podróży. Dzięki temu mogliśmy odkrywać wyspę na własną rękę i zobaczyć znacznie więcej. 🚗🌊
      </Typography>
    </>
  );
};
