import * as D from '../../def';
import { introduce } from './introduce';
import { chart } from './chart_btc';
import { chartEth } from './chart_eth';

export const transactionRate:D.SubMenuItem = {
  name: '交易频率 (Number of Transactions per Second)',
  key: '交易频率',
  loginRequired: true,
  vipRequired: true,
  visible: true,
  isNew: true,
  args: {
    index: 'transaction/rate',
  },
  introduce: introduce,
  assetList: ['btc', 'eth'],
  catalogText: '每秒交易总量',
  toolbox: {
    annotation: {
      enabled: false, // 无标注
    },
    sma: {
      enabled: true,
    },
  },
  chart: { btc: chart, eth: chartEth },
};
