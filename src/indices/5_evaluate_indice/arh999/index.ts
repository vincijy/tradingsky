import * as D from '../../def';
import { annotation } from './annotation';
import { introduce } from './introduce';
import { chart } from './chart';

export const arh999:D.SubMenuItem = {
  name: 'Arh999囤币指数',
  key: 'Arh999囤币指数',
  loginRequired: true,
  vipRequired: false, // free
  visible: true,
  args: {
    index: 'value/arh999',
  },
  introduce: introduce,
  assetList: ['btc'],
  catalogText: '量化比特币底部区域的精准指标',
  toolbox: {
    annotation: {
      enabled: true, // 无标注
    },
    sma: {
      enabled: true,
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
