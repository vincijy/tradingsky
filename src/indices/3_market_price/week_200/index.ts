import * as D from '../../def';
import { introduce } from './introduce';
import { chart } from './chart';

export const week200:D.SubMenuItem = {
  name: '200周均线底部指标',
  key: '200周均线底部指标',
  loginRequired: true, // 付费指标
  vipRequired: false,
  visible: true,
  isNew: false,
  args: {
    index: 'market/200weeks',
  },
  introduce: introduce,
  assetList: ['btc'],
  catalogText: '根据200周均线确定底部区域',
  toolbox: {
    annotation: {
      enabled: false, // 无标注
    },
    sma: {
      enabled: false,
    },
  },
  chart: { btc: chart, eth: chart },

};