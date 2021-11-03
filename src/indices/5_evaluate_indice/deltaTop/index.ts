import * as D from '../../def';
import { introduce } from './introduce';
import { chart } from './chart';

export const deltaTop:D.SubMenuItem = {
  name: 'Delta顶部指标',
  key: 'Delta顶部指标',
  loginRequired: true,
  vipRequired: false,
  visible: true,
  isNew: true,

  args: {
    index: 'value/delta_top',
  },
  introduce: introduce,
  assetList: ['btc'],
  catalogText: '由以实现价格计算出来的顶部指标',
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
