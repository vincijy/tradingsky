import { PullRequestOutlined } from '@ant-design/icons';
import React from 'react';
import * as D from '../def';
import { balancePercent } from './balance_percent';
import { positionChange } from './position_change';
import { flowChange } from './flow_change';
import { fundingRate } from './funding_rate';

export const exchange:D.MenuItem = {
  name: '交易所',
  icon: <PullRequestOutlined />,
  key: 'sub2',
  visible: true,
  assetList: ['btc', 'eth'],
  subMenus: [
    balancePercent,
    positionChange,
    flowChange,
    fundingRate,
  ],
};
