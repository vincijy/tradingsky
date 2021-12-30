import { IoPricetagsOutline } from 'react-icons/io5';
import React from 'react';
import * as D from '../def';
import { priceDrawdown } from './price_drawdown';
import { realizedPL } from './realized_pl';
import { profitPercent } from './profit_percent';
import { rsi } from './rsi';
import { jze60d } from './jze_60d';
import { week200 } from './week_200';
import { marketCap } from './market_cap';
import { transVolume } from './transfer_volume';
import { uniVolume } from './uniswap_volume';



export const marketPrice:D.MenuItem = {
  name: '市场与价格',
  icon: <IoPricetagsOutline />,
  key: 'sub4',
  visible: true,
  assetList: ['btc', 'eth', 'usdt', 'busd', 'usdc', 'okb', 'ftt', 'sushi', 'uni', 'mana', 'matic', 'cro'],
  subMenus: [
    rsi,
    jze60d,
    week200,
    priceDrawdown,
    realizedPL,
    profitPercent,
    marketCap,
    transVolume,
    uniVolume,
  ],
};
