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
      enabled: true, // 有标注
    },
    sma: {
      enabled: true,
    },
  },
  introduce: introduce,
  chart: chart,
};
