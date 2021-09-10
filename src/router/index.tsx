import { dynamicComponent as dc } from '@/utils/dynamic';
const routes = [
  {
    path: '/',
    exact: true,
    component: dc(() => import('@/pages/home'), undefined),
  },
  {
    path: '/chart',
    exact: true,
    component: dc(() => import( '@/pages/studio'), undefined),
  },
  {
    path: '/catalog',
    exact: true,
    component: dc(() => import( '@/pages/catalog'), undefined),
  },
  {
    path: '/setting',
    exact: true,
    component: dc(() => import( '@/pages/setting'), undefined),
  },
  {
    path: '/pirate',
    exact: true,
    component: dc(() => import( '@/pages/pirate'), undefined),
  },
];

export default routes;
