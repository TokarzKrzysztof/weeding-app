import { RouteObject } from 'react-router-dom';
import { AppRoutes } from 'src/router/app-routes';
import { emptyLoader, localLoader } from 'src/router/loaders';

export const routes: RouteObject[] = [
  {
    index: true,
    lazy: async () => {
      const { Home } = await import('../../pages/Home/Home');
      return { Component: Home };
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
