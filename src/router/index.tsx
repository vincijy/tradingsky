import React from 'react';
import { Redirect } from 'react-router-dom';

import LSHomePage from '@/pages/home';
import LSChartPage from '@/pages/studio';
import LSCatalogPage from '@/pages/catalog';
import LSSettingPage from '@/pages/setting';
import LSPiratePage from '@/pages/pirate';

const routes = [
  {
    path: '/',
    exact: true,
    component: LSHomePage,
  },
  {
    path: '/chart',
    exact: true,
    component: LSChartPage,
  },
  {
    path: '/catalog',
    exact: true,
    component: LSCatalogPage,
  },
  {
    path: '/setting',
    exact: true,
    component: LSSettingPage,
  },
  {
    path: '/pirate',
    exact: true,
    component: LSPiratePage,
  },
];

export default routes;
