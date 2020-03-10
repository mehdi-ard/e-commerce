import { lazy } from 'react';
import { NO_DIFFERENT } from './enums';

const routes = [
  {
    title: 'Product',
    path: '/',
    exact: true,
    icon: '',
    component: () => lazy(() => import('page/home')),
    include: [''],
    appBar: false,
    guard: NO_DIFFERENT
  },
  {
    title: 'Cart',
    path: '/cart',
    exact: true,
    icon: '',
    component: () => lazy(() => import('page/cart')),
    include: [''],
    appBar: false,
    guard: NO_DIFFERENT
  },
  
];

export default routes;

export const visibleRoute = which => {
  return routes
    .filter(route => route.include.indexOf(which) !== -1)
    .reduce((a, b) => {
      return {
        ...a,
        [b.path]: b
      };
    }, {});
};
