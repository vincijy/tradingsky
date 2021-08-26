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
    render: function Home():JSX.Element {
      return <Redirect to='/home' />;
    },
  },
  {
    path: '/home',
    component: LSHomePage,
  },
  {
    path: '/chart',
    component: LSChartPage,
  },
  {
    path: '/catalog',
    component: LSCatalogPage,
  },
  {
    path: '/setting/account',
    component: LSSettingPage,
  },
  {
    path: '/pirate',
    component: LSPiratePage,
  },
];

export default routes;
