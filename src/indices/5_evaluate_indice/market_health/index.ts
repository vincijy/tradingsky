import * as D from '../../def';
import { annotation } from './annotation';
import { introduce } from './introduce';
import { chart } from './chart';

export const marketHealth:D.SubMenuItem = {
  name: '市场健康程度 (Bitcoin: Entity-Adjusted Dormancy Flow)',
  key: '市场健康程度',
  loginRequired: true,
  vipRequired: true,
  visible: true,
  args: {
    index: 'value/market_health',
  },
  introduce: introduce,
  assetList: ['btc'],
  catalogText: '衡量市场健康程度的指标',
  toolbox: {
    annotation: {
      enabled: true, // 有标注
    },
    sma: {
      enabled: true,
    },
  },
  chart: { btc: chart, eth: chart },
  annotation: { btc: annotation, eth: annotation },
  xStart: {
    btc: {
      year: 2010,
      month: 8,
      day: 4,
    },
    eth: {
      year: 2010,
      month: 8,
      day: 4,
    },
  },
};
