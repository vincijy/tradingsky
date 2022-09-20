import { lazy } from 'react';
const routes = [
  // {
  //   path: '/',
  //   exact: true,
  //   component: lazy(() => import('@jsx/home')),
  // },
  {
    path: '/',
    exact: true,
    component: lazy(() => import( '@jsx/studio')),
  },
  // {
  //   path: '/catalog',
  //   exact: true,
  //   component: lazy(() => import( '@jsx/catalog')),
  // },
  // {
  //   path: '/setting',
  //   exact: true,
  //   component: lazy(() => import( '@jsx/setting')),
  // },
  // {
  //   path: '/pirate',
  //   exact: true,
  //   component: lazy(() => import( '@jsx/pirate')),
  // },
  // {
  //   path: '/price',
  //   exact: true,
  //   component: lazy(() => import( '@jsx/price')),
  // },
  // {
  //   path: '/contact',
  //   exact: true,
  //   component: lazy(() => import( '@jsx/contact')),
  // },
  // {
  //   path: '/term',
  //   exact: true,
  //   component: lazy(() => import( '@jsx/term')),
  // },
  // {
  //   path: '/privacy',
  //   exact: true,
  //   component: lazy(() => import( '@jsx/privacy')),
  // },
  // {
  //   path: '/discovery',
  //   exact: true,
  //   component: lazy(() => import( '@jsx/discovery')),
  // },
  // {
  //   path: '/discovery/detail',
  //   exact: true,
  //   component: lazy(() => import( '@jsx/discovery/detail/index')),
  // },
  // {
  //   path: '/order',
  //   exact: true,
  //   component: lazy(() => import( '@jsx/order/index')),
  // },
];

export default routes;
