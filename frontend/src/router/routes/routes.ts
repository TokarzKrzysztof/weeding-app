import { RouteObject } from 'react-router-dom';
import { AppRoutes } from 'src/router/app-routes';
import { emptyLoader, localLoader } from 'src/router/loaders';

export const routes: RouteObject[] = [
  // {
  //   index: true,
  //   lazy: async () => {
  //     const { Home } = await import('../../pages/Home/Home');
  //     return { Component: Home };
  //   },
  //   loader: emptyLoader,
  // },
  {
    path: AppRoutes.Trips(),
    lazy: async () => {
      const { Trips } = await import('../../pages/Trips/Trips');
      return { Component: Trips };
    },
    loader: emptyLoader,
  },
  {
    path: AppRoutes.Menu(),
    lazy: async () => {
      const { Menu } = await import('../../pages/Menu/Menu');
      return { Component: Menu };
    },
    loader: emptyLoader,
  },
  {
    path: AppRoutes.OurStory(),
    lazy: async () => {
      const { OurStory } = await import('../../pages/OurStory/OurStory');
      return { Component: OurStory };
    },
    loader: emptyLoader,
  },
  {
    path: AppRoutes.Admin(),
    lazy: async () => {
      const { Admin } = await import('../../pages/Admin/Admin');
      return { Component: Admin };
    },
    loader: localLoader,
  },
];
