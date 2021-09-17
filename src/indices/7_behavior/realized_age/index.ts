import { introduce } from './introduce';
import { chart } from './chart';

export const realizedAge = {
  name: '出售时的年龄分布占比',
  key: '出售时的年龄分布占比',
  loginRequired: true,
  vipRequired: true,
  visible: true,
  args: {
    index: 'behavior/realized_age',
  },
  assetList: ['btc'],
  catalogText: '不同年龄的投资者抛售占比',
  toolbox: {
    annotation: {
      enabled: false, // 无标注
    },
    sma: {
      enabled: true,
    },
  },
  introduce: introduce,
  chart: chart,
};
