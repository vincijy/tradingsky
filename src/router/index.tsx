import React from 'react';
import { Redirect } from 'react-router-dom';

import LSHomePage from '@/pages/home';
import LSChartPage from '@/pages/chart';
import LSCatalogPage from '@/pages/catalog';
import LSSettingPage from '@/pages/setting';

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
];

export default routes;
