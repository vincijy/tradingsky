import { dynamicComponent as dc } from '@/utils/dynamic';
import { lazy } from 'react';
const routes = [
  {
    path: '/',
    exact: true,
    component: lazy(() => import('@/pages/home')),
  },
  {
    path: '/chart',
    exact: true,
    component: lazy(() => import( '@/pages/studio')),
  },
  {
    path: '/catalog',
    exact: true,
    component: lazy(() => import( '@/pages/catalog')),
  },
  {
    path: '/setting',
    exact: true,
    component: lazy(() => import( '@/pages/setting')),
  },
  {
    path: '/pirate',
    exact: true,
    component: lazy(() => import( '@/pages/pirate')),
  },
  {
    path: '/price',
    exact: true,
    component: lazy(() => import( '@/pages/price')),
  },
  {
    path: '/term',
    exact: true,
    component: lazy(() => import( '@/pages/term')),
  },
  {
    path: '/privacy',
    exact: true,
    component: lazy(() => import( '@/pages/privacy')),
  },
];

export default routes;
