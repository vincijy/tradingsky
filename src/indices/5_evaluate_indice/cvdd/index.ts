import * as D from '../../def';
import { annotation } from './annotation';
import { introduce } from './introduce';
import { chart } from './chart';

export const cvdd:D.SubMenuItem = {
  name: 'CVDD底部指标',
  key: 'CVDD底部指标',
  loginRequired: true,
  vipRequired: true,
  visible: true,
  args: {
    index: 'value/cvdd',
  },
  introduce: introduce,
  assetList: ['btc'],
  catalogText: '量化比特币底部区域的精准指标',
  toolbox: {
    annotation: {
      enabled: false, // 无标注
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
      month: 3,
      day: 17,
    },
    eth: {
      year: 2011,
      month: 3,
      day: 17,
    },
  },
};
