import { FaBalanceScaleLeft } from 'react-icons/fa';
import React from 'react';
import * as D from '../def';
import { balancePercent } from './balance_percent';
import { positionChange } from './position_change';
import { flowChange } from './flow_change';
import { fundingRate } from './funding_rate';
import { balanceExchange } from './balance';


export const exchange:D.MenuItem = {
  name: '交易所',
  icon: <FaBalanceScaleLeft />,
  key: 'sub2',
  visible: true,
  assetList: ['btc', 'eth', 'usdt', 'busd', 'usdc', 'okb', 'ftt', 'sushi', 'uni', 'mana', 'matic', 'cro', 'wbtc', 'link', 'dai'],
  subMenus: [
    balancePercent,
    positionChange,
    flowChange,
    fundingRate,
    balanceExchange,
  ],
};
