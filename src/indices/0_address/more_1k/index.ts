import * as D from '../../def';
import { introduce } from './introduce';
import { chart } from './chart';

export const addressMore1k:D.SubMenuItem = {
  name: '巨鲸地址数量（>1k）',
  key: '巨鲸地址数量（>1k）',
  loginRequired: true,
  vipRequired: true,
  visible: true,
  args: {
    index: 'address/balance_more1k',
  },
  introduce: introduce,
  assetList: ['btc', 'eth'],
  catalogText: '巨鲸地址数量统计（余额 > 1K）',
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
