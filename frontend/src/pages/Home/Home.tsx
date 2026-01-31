import { CountryItem } from 'src/pages/Home/CountryItem';
import { data } from 'src/pages/Home/data';
import { HomeFullscreenDialog } from 'src/pages/Home/FullscreenDialog';
import { Container, Typography } from 'src/ui-components';

export const Home = () => {
  return (
    <>
      <Container sx={{ textAlign: 'center' }}>
        <Typography type='title' component={'h1'}>
          Witamy na naszym weselu!
        </Typography>
        <Typography mt={5}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur libero, vero corrupti
          consequatur delectus maxime magnam consequuntur quisquam quod repudiandae autem itaque
          quo, temporibus minus beatae explicabo? Perferendis, quo possimus!
        </Typography>
        {data.map((x) => (
          <CountryItem data={x} key={x.label} />
        ))}
      </Container>
      <HomeFullscreenDialog />
    </>
  );
};

Home.displayName = 'Home';
