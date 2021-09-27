import { introduce } from './introduce';
import { chart } from './chart';

export const longSell = {
  name: '长期持有者抛售趋势',
  key: '长期持有者抛售趋势',
  loginRequired: true,
  vipRequired: true,
  visible: true,
  args: {
    index: 'behavior/long_sell',
  },
  assetList: ['btc'],
  catalogText: '量化长期持有者抛压大小的指标',
  toolbox: {
    annotation: {
      enabled: false, // 有标注
    },
    sma: {
      enabled: true,
    },
  },
  introduce: introduce,
  chart: { btc: chart, eth: chart },
  xStart: {
    btc: {
      year: 2010,
      month: 7,
      day: 25,
    },
    eth: {
      year: 2010,
      month: 7,
      day: 25,
    },
  },
};
