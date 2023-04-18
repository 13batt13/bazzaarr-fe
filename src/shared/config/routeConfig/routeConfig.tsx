import { RouteProps } from 'react-router-dom';

import { lazy } from 'react';

const Home = lazy(() => import('pages/home'));
const Product = lazy(() => import('pages/product'));
const Profile = lazy(() => import('pages/profile'));
const Favorites = lazy(() => import('pages/favorites'));
const NotFound = lazy(() => import('pages/notFound'));

export enum AppRoutes {
  HOME = 'home',
  PRODUCT = 'product',
  PROFILE = 'profile',
  FAVORITES = 'favorites',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: '/',
  [AppRoutes.PRODUCT]: 'product/:id',
  [AppRoutes.PROFILE]: 'profile',
  [AppRoutes.FAVORITES]: 'favorites',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.HOME]: { path: RoutePath.home, element: <Home /> },
  [AppRoutes.PRODUCT]: { path: RoutePath.product, element: <Product /> },
  [AppRoutes.PROFILE]: { path: RoutePath.profile, element: <Profile /> },
  [AppRoutes.FAVORITES]: { path: RoutePath.favorites, element: <Favorites /> },
  [AppRoutes.NOT_FOUND]: { path: RoutePath.not_found, element: <NotFound /> },
};
