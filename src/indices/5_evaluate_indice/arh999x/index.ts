import * as D from '../../def';
import { annotation } from './annotation';
import { introduce } from './introduce';
import { chart } from './chart';

export const arh999x:D.SubMenuItem = {
  name: 'Arh999x指数',
  key: 'Arh999x指数',
  loginRequired: true,
  vipRequired: true, // pay
  visible: true,
  isNew: true,

  args: {
    index: 'value/arh999x',
  },
  introduce: introduce,
  assetList: ['btc'],
  catalogText: '根据Arh999优化后得到',
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
