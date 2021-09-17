import { introduce } from './introduce';
import { annotation } from './annotation';
import { chart } from './chart';

export const hashRibbon = {
  name: '哈希带',
  key: '哈希带',
  loginRequired: true, // 免费指标
  vipRequired: false,
  visible: true,
  args: {
    index: 'miner/hash_ribbon',
  },
  assetList: ['btc'],
  catalogText: '基于哈希率量化挖矿难度与价格的关系',
  toolbox: {
    annotation: {
      enabled: false, // 无标注
    },
    sma: {
      enabled: true,
    },
  },
  introduce: introduce,
  annotation: annotation,
  chart: chart,
};
