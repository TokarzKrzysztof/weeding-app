import { To, useLocation } from 'react-router-dom';
import { AppRoutes } from 'src/router/app-routes';

export type FolderName = 'glowna' | 'kontakt' | 'o-mnie' | 'oferta' | 'portfolio';
export type Contrast = 'black' | 'white';
export type PageHeaderConfig =
  | {
      to: To;
      title: string;
      folder: FolderName;
      contrastsMobile: [Contrast];
      contrastsDesktop: [Contrast];
    }
  | {
      to: ReturnType<(typeof AppRoutes)['Home']>;
      title: '',
      folder: Extract<FolderName, 'glowna'>;
      contrastsMobile: [Contrast, Contrast, Contrast];
      contrastsDesktop: [Contrast, Contrast, Contrast];
    };

const data: PageHeaderConfig[] = [
  {
    to: AppRoutes.Home(),
    title: '',
    folder: 'glowna',
    contrastsMobile: ['white', 'white', 'white'],
    contrastsDesktop: ['white', 'white', 'white'],
  },
  {
    to: AppRoutes.Offer(),
    title: 'Oferta',
    folder: 'oferta',
    contrastsMobile: ['white'],
    contrastsDesktop: ['white'],
  },
  {
    to: AppRoutes.Contact(),
    title: 'Kontakt',
    folder: 'kontakt',
    contrastsMobile: ['white'],
    contrastsDesktop: ['white'],
  },
  {
    to: AppRoutes.Portfolio(),
    title: 'Portfolio',
    folder: 'portfolio',
    contrastsMobile: ['white'],
    contrastsDesktop: ['white'],
  },
  {
    to: AppRoutes.AboutMe(),
    title: 'O mnie',
    folder: 'o-mnie',
    contrastsMobile: ['white'],
    contrastsDesktop: ['white'],
  },
];

export const useHeaderConfig = () => {
  const location = useLocation();

  const pathnameWithoutChildren = '/' + location.pathname.split('/')[1];
  const current = data.find((x) => x.to === pathnameWithoutChildren)!;
  return { current };
};
