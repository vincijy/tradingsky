
import { ProjectOutlined } from '@ant-design/icons';
import React from 'react';
import * as D from '../def';
import { circulating } from './stable_circulating';
import { ssr } from './ssr';

export const capitalEnv:D.MenuItem = {
  name: '资金环境',
  icon: <ProjectOutlined />,
  key: 'sub5',
  visible: true,
  assetList: ['btc'],
  subMenus: [
    circulating,
    ssr,
  ],
};
