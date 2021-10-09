import { FlagOutlined } from '@ant-design/icons';
import React from 'react';
import * as D from '../def';
import { priceDrawdown } from './price_drawdown';
import { realizedPL } from './realized_pl';
import { profitPercent } from './profit_percent';
import { rsi } from './rsi';
import { jze60d } from './jze_60d';
import { week200 } from './week_200';


export const marketPrice:D.MenuItem = {
  name: '市场与价格',
  icon: <FlagOutlined />,
  key: 'sub4',
  visible: true,
  assetList: ['btc', 'eth'],
  subMenus: [
    priceDrawdown,
    jze60d,
    week200,
    rsi,
    realizedPL,
    profitPercent,
  ],
};
