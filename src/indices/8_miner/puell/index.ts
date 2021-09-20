import { annotation } from './annotation';
import { introduce } from './introduce';
import { chart } from './chart';

export const puell = {
  name: '普埃尔倍数',
  key: '普埃尔倍数',
  loginRequired: true, // 付费指标
  vipRequired: true,
  visible: true,
  args: {
    index: 'miner/puell',
  },
  assetList: ['btc'],
  catalogText: '基于挖矿利润衡量比特币市场周期',
  toolbox: {
    annotation: {
      enabled: true, // 有标注
    },
    sma: {
      enabled: true,
    },
  },
  introduce: introduce,
  annotation: annotation,
  chart: { btc: chart, eth: chart },
  xStart: {
    btc: {
      year: 2011,
      month: 11,
      day: 18,
    },
    eth: {
      year: 2011,
      month: 11,
      day: 18,
    },
  },
};
