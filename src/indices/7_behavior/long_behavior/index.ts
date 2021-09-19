import { introduce } from './introduce';
import { chart } from './chart';

export const longBehavior = {
  name: '长期持有者行为',
  key: '长期持有者行为',
  loginRequired: true,
  vipRequired: true,
  visible: true,
  args: {
    index: 'behavior/long_behavior',
  },
  assetList: ['btc'],
  catalogText: '量化长期持有者的宏观支出模式和行为变化',
  toolbox: {
    annotation: {
      enabled: false, // 无标注
    },
    sma: {
      enabled: true,
    },
  },
  introduce: introduce,
  chart: { btc: chart, eth: chart },
  xStart: {
    btc: {
      year: 2016,
      month: 6,
      day: 18,
    },
    eth: {
      year: 2015,
      month: 3,
      day: 18,
    },
  },
};
