import * as D from '../../def';
import { annotation } from './annotation';
import { introduce } from './introduce';
import { chart } from './chart';

export const arh999:D.SubMenuItem = {
  name: 'Arh999囤币指数',
  key: 'Arh999囤币指数',
  loginRequired: false,
  vipRequired: false, // free
  visible: true,
  isNew: true,

  args: {
    index: 'value/arh999',
  },
  introduce: introduce,
  assetList: ['btc'],
  catalogText: '根据历史价格拟合的囤币指标',
  toolbox: {
    annotation: {
      enabled: true, // 无标注
    },
    sma: {
      enabled: false,
    },
  },
  chart: { btc: chart, eth: chart },
  annotation: { btc: annotation, eth: annotation },
  xStart: {
    btc: {
      year: 2011,
      month: 2,
      day: 2,
    },
    eth: {
      year: 2011,
      month: 2,
      day: 2,
    },
  },
};
