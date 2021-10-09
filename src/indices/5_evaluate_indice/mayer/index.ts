import * as D from '../../def';
import { annotation } from './annotation';
import { introduce } from './introduce';
import { chart } from './chart';

export const mayer:D.SubMenuItem = {
  name: '梅耶倍数',
  key: '梅耶倍数',
  loginRequired: true,
  vipRequired: true,
  visible: true,
  args: {
    index: 'value/mayer',
  },
  introduce: introduce,
  assetList: ['btc'],
  catalogText: '利用价格区间对比特币进行估值',
  toolbox: {
    annotation: {
      enabled: true, // 有标注
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
      day: 12,
    },
    eth: {
      year: 2011,
      month: 2,
      day: 12,
    },
  },
};
