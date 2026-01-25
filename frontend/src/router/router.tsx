import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from 'src/App';
import { AppRoutes } from 'src/router/app-routes';
import { routes } from 'src/router/routes/routes';

export const router = createBrowserRouter([
  {
    path: AppRoutes.Home(),
    element: <App />,
    children: [...routes],
  },
  { path: '*', element: <Navigate to={AppRoutes.Home()} /> },
]);
