import _ from 'lodash';
import { PlaceLabel } from 'src/pages/Home/data';

export const privateChatUrl = '/my-chats/private-chat';
export const groupChatUrl = '/my-chats/group-chat';

export const AppRoutes = {
  Home: (params?: HomeParams) => makeUrl('/', params),
  // Contact: () => '/contact',
  // AboutMe: () => '/about-me',
  // Offer: (params?: UseScrollParams) => makeUrl('/offer', params),
  // OfferProduct: (params?: UseScrollParams) => makeUrl('/offer/product', params),
  // OfferFood: (params?: UseScrollParams) => makeUrl('/offer/food', params),
  // OfferReportage: (params?: UseScrollParams) => makeUrl('/offer/reportage', params),
  // Portfolio: (params?: UseScrollParams) => makeUrl('/portfolio', params),
  // PortfolioProduct: (params?: UseScrollParams) => makeUrl('/portfolio/product', params),
  // PortfolioFood: (params?: UseScrollParams) => makeUrl('/portfolio/food', params),
  // PortfolioReportage: (params?: UseScrollParams) => makeUrl('/portfolio/reportage', params),
  Admin: () => '/admin',
} as const;

const makeUrl = (url: string, params?: Record<string, unknown>) => {
  if (!params || _.isEmpty(params)) return url;

  Object.entries(params).forEach(([key, value]) => {
    if (value == null || value === undefined) {
      delete params[key];
    }
  });

  const query = new URLSearchParams(params as Record<string, string>).toString();
  return `${url}?${query}`;
};

export type HomeParams = {
  place?: PlaceLabel
}