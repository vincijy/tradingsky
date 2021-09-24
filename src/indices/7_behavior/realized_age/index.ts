import { introduce } from './introduce';
import { chartBtc } from './chart';

export const realizedAge = {
  name: '出售时的年龄分布占比',
  key: '出售时的年龄分布占比',
  loginRequired: true,
  vipRequired: true,
  visible: true,
  args: {
    index: 'behavior/realized_age',
  },
  assetList: ['btc'],
  catalogText: '不同年龄的投资者抛售占比',
  toolbox: {
    annotation: {
      enabled: false, // 无标注
    },
    sma: {
      enabled: true,
    },
  },
  introduce: introduce,
  chart: { btc: chartBtc, eth: chartBtc },
  xStart: {
    btc: {
      year: 2010,
      month: 7,
      day: 18,
    },
    eth: {
      year: 2010,
      month: 7,
      day: 18,
    },
  },
};
