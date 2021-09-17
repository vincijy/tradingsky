import * as D from '../../def';
import { introduce } from './introduce';
import { annotation } from './annotation';
import { chart } from './chart';
export const marketGreed:D.SubMenuItem = {
  name: '市场贪婪度',
  key: '市场贪婪度',
  loginRequired: true, // 付费指标
  vipRequired: true,
  visible: true,
  args: {
    index: 'sentiment/market_greed',
  },
  introduce: introduce,
  assetList: ['btc', 'eth'],
  catalogText: '衡量市场情绪及贪婪度的精准顶部指标',
  toolbox: {
    annotation: {
      enabled: true, // 有标注
    },
    sma: {
      enabled: true,
    },
  },
  annotation: annotation,
  chart: chart,
};
