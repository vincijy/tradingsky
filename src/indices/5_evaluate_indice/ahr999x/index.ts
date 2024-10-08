import * as D from '../../def';
import { annotation } from './annotation';
import { introduce } from './introduce';
import { chart } from './chart';

export const ahr999x:D.SubMenuItem = {
  name: 'Ahr999x指数',
  key: 'Arh999x指数', // 名字, 原先笔误, 这里作为key即使笔误了, 也不能修改
  loginRequired: true,
  vipRequired: true, // pay
  visible: true,
  isNew: false,

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
