import { introduce } from './introduce';
import { chartBtc } from './chart_btc';
import { chartEth } from './chart_eth';

export const sopr = {
  name: 'spent outputs 利润率（SOPR）',
  key: 'spent outputs 利润率（SOPR）',
  loginRequired: false, // 免费指标
  vipRequired: false,
  visible: true,
  args: {
    index: 'sentiment/sopr',
  },
  assetList: ['btc', 'eth'],
  catalogText: '衡量投资者行为的短期抄底指标',
  toolbox: {
    annotation: {
      enabled: false, // 有标注
    },
    sma: {
      enabled: true,
    },
  },
  introduce: introduce,
  // annotation: { btc: annotation, eth: annotation },
  chart: { btc: chartBtc, eth: chartEth },
  xStart: {
    btc: {
      year: 2013,
      month: 1,
      day: 1,
    },
    eth: {
      year: 2015,
      month: 8,
      day: 8,
    },
  },
};
