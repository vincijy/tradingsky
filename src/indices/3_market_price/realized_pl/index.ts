import * as D from '../../def';
import { introduce } from './introduce';
import { chart } from './chart';

export const realizedPL:D.SubMenuItem = {
  name: '已实现净损益',
  key: '已实现净损益',
  loginRequired: true, // 付费指标
  vipRequired: true,
  visible: true,
  args: {
    index: 'market/realized_pl',
  },
  introduce: introduce,
  assetList: ['btc'],
  catalogText: '链上移动硬币的净损益',
  toolbox: {
    annotation: {
      enabled: false, // 无标注
    },
    sma: {
      enabled: true,
    },
  },
  chart: chart,
};