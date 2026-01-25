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
    path: AppRoutes.Contact(),
    lazy: async () => {
      const { Contact } = await import('../../pages/Contact/Contact');
      return { Component: Contact };
    },
    loader: emptyLoader,
  },
  {
    path: AppRoutes.AboutMe(),
    lazy: async () => {
      const { AboutMe } = await import('../../pages/AboutMe/AboutMe');
      return { Component: AboutMe };
    },
    loader: emptyLoader,
  },
  {
    path: AppRoutes.Offer(),
    lazy: async () => {
      const { Offer } = await import('../../pages/Offer/Offer');
      return { Component: Offer };
    },
    loader: emptyLoader,
    children: [
      {
        path: AppRoutes.OfferProduct(),
        lazy: async () => {
          const { OfferProduct } = await import('../../pages/Offer/sub-pages/OfferProduct');
          return { Component: OfferProduct };
        },
        loader: emptyLoader,
      },
      {
        path: AppRoutes.OfferFood(),
        lazy: async () => {
          const { OfferFood } = await import('../../pages/Offer/sub-pages/OfferFood');
          return { Component: OfferFood };
        },
        loader: emptyLoader,
      },
      {
        path: AppRoutes.OfferReportage(),
        lazy: async () => {
          const { OfferReportage } = await import('../../pages/Offer/sub-pages/OfferReportage');
          return { Component: OfferReportage };
        },
        loader: emptyLoader,
      },
    ],
  },
  {
    path: AppRoutes.Portfolio(),
    lazy: async () => {
      const { Portfolio } = await import('../../pages/Portfolio/Portfolio');
      return { Component: Portfolio };
    },
    loader: emptyLoader,
    children: [
      {
        path: AppRoutes.PortfolioProduct(),
        lazy: async () => {
          const { PortfolioProduct } = await import(
            '../../pages/Portfolio/sub-pages/PortfolioProduct'
          );
          return { Component: PortfolioProduct };
        },
        loader: emptyLoader,
      },
      {
        path: AppRoutes.PortfolioFood(),
        lazy: async () => {
          const { PortfolioFood } = await import('../../pages/Portfolio/sub-pages/PortfolioFood');
          return { Component: PortfolioFood };
        },
        loader: emptyLoader,
      },
      {
        path: AppRoutes.PortfolioReportage(),
        lazy: async () => {
          const { PortfolioReportage } = await import(
            '../../pages/Portfolio/sub-pages/PortfolioReportage'
          );
          return { Component: PortfolioReportage };
        },
        loader: emptyLoader,
      },
    ],
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
