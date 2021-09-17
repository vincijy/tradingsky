import * as D from '../../def';
import { annotation } from './annotation';
import { introduce } from './introduce';
import { chart } from './chart';

export const profitPercent:D.SubMenuItem = {
  name: '流通盈利率',
  key: '流通盈利率',
  loginRequired: true,
  vipRequired: true,
  visible: true,
  args: {
    index: 'market/profit_percent',
  },
  introduce: introduce,
  assetList: ['btc', 'eth'],
  catalogText: '盈利的比特币数量占总量的百分比',
  toolbox: {
    annotation: {
      enabled: true, // 有标注
    },
    sma: {
      enabled: true,
    },
  },
  chart: chart,
  annotation: annotation,
};
