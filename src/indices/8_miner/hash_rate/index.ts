import { introduce } from './introduce';
import { chart } from './chart';

export const hashRate = {
  name: '哈希率',
  key: '哈希率',
  loginRequired: true, // 付费指标
  vipRequired: true,
  visible: true,

  args: {
    index: 'miner/hash_rate',
  },
  assetList: ['btc'],
  catalogText: '每秒可以执行的哈希运算次数',
  toolbox: {
    annotation: {
      enabled: false, // 无标注
    },
    sma: {
      enabled: true,
    },
  },
  introduce: introduce,
  chart: { btc: chart, eth: chart },

};
