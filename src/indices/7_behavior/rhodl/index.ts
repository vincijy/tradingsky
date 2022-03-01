import { introduce } from './introduce';
import { chart } from './chart';
import { annotation } from './annotation';

export const rhodl = {
  name: 'RHODL指标',
  key: 'RHODL指标',
  loginRequired: true,
  vipRequired: true,
  visible: true,
  args: {
    index: 'behavior/rhodl',
  },
  assetList: ['btc'],
  catalogText: '通过市场天数比率衡量市场周期',
  toolbox: {
    annotation: {
      enabled: true, // 无标注
    },
    sma: {
      enabled: true,
    },
  },
  introduce: introduce,
  chart: { btc: chart, eth: chart },
  annotation: { btc: annotation, eth: annotation },

  xStart: {
    btc: {
      year: 2010,
      month: 12,
      day: 18,
    },
    eth: {
      year: 2010,
      month: 12,
      day: 18,
    },
  },
};
