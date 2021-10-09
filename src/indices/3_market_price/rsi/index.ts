import * as D from '../../def';
import { introduce } from './introduce';
import { chart } from './chart';

export const rsi:D.SubMenuItem = {
  name: '比特币RSI',
  key: '比特币RSI',
  loginRequired: true, // 付费指标
  vipRequired: false,
  visible: true,
  isNew: true,

  args: {
    index: 'market/rsi',
  },
  introduce: introduce,
  assetList: ['btc'],
  catalogText: 'RSI是基于动量的比特币市场可视化',
  toolbox: {
    annotation: {
      enabled: false, // 无标注
    },
    sma: {
      enabled: true,
    },
  },
  chart: { btc: chart, eth: chart },
};