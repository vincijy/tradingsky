
import { AlertOutlined } from '@ant-design/icons';
import React from 'react';
import * as D from '../def';
import { marketGreed } from './market_greed';
import { sopr } from './sopr';
export const sentiment:D.MenuItem = {
  name: '市场情绪',
  icon: <AlertOutlined />,
  key: 'sub7',
  visible: true,
  assetList: ['btc', 'eth'],
  subMenus: [
    sopr,
    marketGreed,
  ],
};
