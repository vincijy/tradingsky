import { FlagOutlined } from '@ant-design/icons';
import React from 'react';
import * as D from '../def';
import { priceDrawdown } from './price_drawdown';
import { realizedPL } from './realized_pl';
import { profitPercent } from './profit_percent';

export const marketPrice:D.MenuItem = {
  name: '市场与价格',
  icon: <FlagOutlined />,
  key: 'sub4',
  visible: true,
  assetList: ['btc', 'eth'],
  subMenus: [
    priceDrawdown,
    realizedPL,
    profitPercent,
  ],
};
