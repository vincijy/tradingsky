import * as D from '../../def';
import { introduce } from './introduce';
import { chart } from './chart_btc';
import { annotation } from './annotation';

export const fundingRate:D.SubMenuItem = {
  name: '期货资金费率',
  key: '期货资金费率',
  loginRequired: true,
  vipRequired: true,
  visible: true,
  args: {
    index: 'exchange/funding_rate',
  },
  introduce: introduce,
  assetList: ['btc', 'eth'],
  catalogText: '交易所永续期货合约的平均融资利率（单位：%）',
  toolbox: {
    annotation: {
      enabled: true, // 无标注
    },
    sma: {
      enabled: true,
    },
  },
  chart: { btc: chart, eth: chart },
  xStart: {
    btc: {
      year: 2021,
      month: 8,
      day: 20,
    },
    eth: {
      year: 2021,
      month: 8,
      day: 20,
    },
  },
};
