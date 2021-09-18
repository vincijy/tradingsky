import { ThunderboltOutlined } from '@ant-design/icons';
import React from 'react';
import * as D from '../def';
import { longBehavior } from './long_behavior';
import { reserveRisk } from './reserve_risk';
import { longSell } from './long_sell';
import { realizedAge } from './realized_age';
import { hodlAge } from './hodl_age';
export const investorBehavior:D.MenuItem = {
  name: '投资者行为',
  icon: <ThunderboltOutlined />,
  key: 'sub8',
  visible: true,
  assetList: ['btc', 'eth'],
  subMenus: [
    longBehavior,
    reserveRisk,
    longSell,
    realizedAge,
    hodlAge,
  ],
};
