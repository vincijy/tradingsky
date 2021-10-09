import * as D from '../../def';
import { annotation } from './annotation';
import { introduce } from './introduce';
import { chart } from './chart';

export const activeSentiment:D.SubMenuItem = {
  name: '活跃地址情绪量',
  key: '活跃地址情绪量',
  loginRequired: true,
  vipRequired: true, // free
  visible: true,
  args: {
    index: 'address/active_sentiment',
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
      year: 2015,
      month: 1,
      day: 2,
    },
    eth: {
      year: 2015,
      month: 1,
      day: 2,
    },
  },
};
