import * as D from '../../def';
import { introduce } from './introduce';
import { chart } from './chart';

export const addressMore100:D.SubMenuItem = {
  name: '余额 > 100地址量',
  key: '余额 > 100地址量',
  loginRequired: true,
  vipRequired: false,
  visible: true,
  args: {
    index: 'address/balance_more100',
  },
  introduce: introduce,
  assetList: ['btc', 'eth'],
  catalogText: '持币余额 > 100 的地址数量',
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
