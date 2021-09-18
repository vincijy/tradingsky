import { introduce } from './introduce';
import { chart } from './chart';

export const sopr = {
  name: 'spent outputs 利润率（SOPR）',
  key: 'spent outputs 利润率（SOPR）',
  loginRequired: true, // 免费指标
  vipRequired: false,
  visible: true,
  args: {
    index: 'sentiment/sopr',
  },
  assetList: ['btc', 'eth'],
  catalogText: '衡量投资者行为的短期抄底指标',
  toolbox: {
    annotation: {
      enabled: true, // 有标注
    },
    sma: {
      enabled: true,
    },
  },
  introduce: introduce,
  chart: { btc: chart, eth: chart },
};
