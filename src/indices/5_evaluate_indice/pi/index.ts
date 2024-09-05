import * as D from '../../def';
import { introduce } from './introduce';
import { chart } from './chart';
import { annotation } from './annotation';

export const Pi:D.SubMenuItem = {
  name: 'pi顶部周期指标',
  key: 'pi顶部周期指标',
  loginRequired: true,
  vipRequired: false,
  visible: true,
  isNew: false,

  args: {
    index: 'value/pi',
  },
  introduce: introduce,
  assetList: ['btc'],
  catalogText: '周期顶部指标，可在3天内确定市场峰值',
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
      year: 2024,
      month: 1,
      day: 18,
    },
    eth: {
      year: 2024,
      month: 1,
      day: 18,
    },
  },
};
