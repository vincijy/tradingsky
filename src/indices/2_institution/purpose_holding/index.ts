import * as D from '../../def';
import { introduce } from './introduce';
import { chart } from './chart_btc';

export const purposeHolding:D.SubMenuItem = {
  name: 'Purpose Bitcoin ETF持仓量',
  key: 'Purpose Bitcoin ETF持仓量',
  loginRequired: true,
  vipRequired: false,
  visible: true,
  args: {
    index: 'institution/purpose_holding',
  },
  introduce: introduce,
  assetList: ['btc'],
  catalogText: 'Purpose Bitcoin ETF 持有的BTC数量',
  toolbox: {
    annotation: {
      enabled: false, // 无标注
    },
    sma: {
      enabled: false,
    },
  },
  chart: { btc: chart, eth: chart },
  xStart: {
    btc: {
      year: 2021,
      month: 2,
      day: 20,
    },
    eth: {
      year: 2021,
      month: 2,
      day: 20,
    },
  },
};
