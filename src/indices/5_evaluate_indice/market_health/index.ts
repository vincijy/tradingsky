import * as D from '../../def';
import { annotation } from './annotation';
import { introduce } from './introduce';
import { chart } from './chart';

export const marketHealth:D.SubMenuItem = {
  name: '市场健康程度',
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
  annotation: annotation,
};
