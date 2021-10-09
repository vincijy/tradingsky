
import { AlertOutlined } from '@ant-design/icons';
import React from 'react';
import * as D from '../def';
import { fearGreedIndex } from './fear_greed_index';
import { sopr } from './sopr';
import { marketGreed } from './market_greed';
export const sentiment:D.MenuItem = {
  name: '市场情绪',
  icon: <AlertOutlined />,
  key: 'sub7',
  visible: true,
  assetList: ['btc', 'eth'],
  subMenus: [
    fearGreedIndex,
    sopr,
    marketGreed,
  ],
};
