import * as D from '../../def';
import { annotation } from './annotation';
import { introduce } from './introduce';
import { chart } from './chart';

export const fearGreedIndex:D.SubMenuItem = {
  name: '恐惧贪婪指数',
  key: '恐惧贪婪指数',
  loginRequired: true,
  vipRequired: false, // free
  visible: true,
  args: {
    index: 'sentiment/fear_greed_index',
  },
  introduce: introduce,
  assetList: ['btc'],
  catalogText: '比特币的恐慌和贪婪指数',
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
      year: 2018,
      month: 2,
      day: 2,
    },
    eth: {
      year: 2018,
      month: 2,
      day: 2,
    },
  },
};
