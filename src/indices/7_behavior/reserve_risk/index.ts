import { annotation } from './annotation';
import { introduce } from './introduce';
import { chart } from './chart';

export const reserveRisk = {
  name: '储备风险',
  key: '储备风险',
  loginRequired: true, // 付费指标
  vipRequired: true,
  visible: true,
  args: {
    index: 'behavior/reserve_risk',
  },
  assetList: ['btc'],
  catalogText: '用于量化长期持有者市场信心的指标',
  toolbox: {
    annotation: {
      enabled: true, // 有标注
    },
    sma: {
      enabled: true,
    },
  },
  introduce: introduce,
  annotaiton: annotation,
  chart: { btc: chart, eth: chart },
  xStart: {
    btc: {
      year: 2010,
      month: 10,
      day: 10,
    },
    eth: {
      year: 2010,
      month: 10,
      day: 10,
    },
  },
};
