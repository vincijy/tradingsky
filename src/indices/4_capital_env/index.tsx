
import { MergeCellsOutlined, PullRequestOutlined, PayCircleOutlined, FlagOutlined, ProjectOutlined, LineChartOutlined, AlertOutlined, ThunderboltOutlined, PieChartOutlined } from '@ant-design/icons';
import React from 'react';
import * as D from '../def';
import { circulating } from './stable_circulating';
import { ssr } from './ssr';

export const capitalEnv:D.MenuItem = {
  name: '资金环境',
  icon: <ProjectOutlined />,
  key: 'sub5',
  visible: true,
  assetList: ['btc', 'eth'],
  subMenus: [
    circulating,
    ssr,
  ],
};
