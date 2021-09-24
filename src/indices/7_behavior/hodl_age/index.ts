import { introduce } from './introduce';
import { chartBtc } from './chart';

export const hodlAge = {
  name: '持有年龄分布',
  key: '持有年龄分布',
  loginRequired: true,
  vipRequired: true,
  visible: true,
  args: {
    index: 'behavior/hodl_age',
  },
  assetList: ['btc', 'eth'],
  catalogText: '不同年龄的投资者持有占比',
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
      year: 2009,
      month: 1,
      day: 9,
    },
    eth: {
      year: 2015,
      month: 7,
      day: 31,
    },
  },
};
