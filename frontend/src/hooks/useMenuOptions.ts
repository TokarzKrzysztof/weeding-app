import { useLocation } from 'react-router-dom';
import { AppRoutes } from 'src/router/app-routes';

export const useMenuOptions = () => {
  const location = useLocation();

  const menuOptions = [
    { text: 'Strona główna', to: AppRoutes.Home() },
    { text: 'Oferta', to: AppRoutes.Offer() },
    { text: 'Portfolio', to: AppRoutes.Portfolio() },
    { text: 'O mnie', to: AppRoutes.AboutMe() },
    { text: 'Kontakt', to: AppRoutes.Contact() },
  ];
  const pathnameWithoutChildren = '/' + location.pathname.split('/')[1];
  const active = menuOptions.find((x) => x.to === pathnameWithoutChildren);

  return { menuOptions, active };
};
