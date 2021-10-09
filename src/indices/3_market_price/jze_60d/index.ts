import * as D from '../../def';
import { introduce } from './introduce';
import { annotation } from './annotation';
import { chart } from './chart';

export const jze60d:D.SubMenuItem = {
  name: '江卓尔60日累计涨幅',
  key: '江卓尔60日累计涨幅',
  loginRequired: true, // 付费指标
  vipRequired: false,
  visible: true,
  args: {
    index: 'market/jze60d',
  },
  introduce: introduce,
  assetList: ['btc'],
  catalogText: '该指标统计了60日累计涨幅',
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
      year: 2010,
      month: 9,
      day: 16,
    },
    eth: {
      year: 2010,
      month: 9,
      day: 16,
    },
  },
};