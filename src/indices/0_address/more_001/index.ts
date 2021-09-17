import * as D from '../../def';
import { introduce } from './introduce';
import { chart } from './chart';

export const addressMore001:D.SubMenuItem = {
  name: '余额 > 0.01地址量',
  key: '余额 > 0.01地址量',
  loginRequired: true,
  vipRequired: false,
  visible: true,
  args: {
    index: 'address/balance_more001',
  },
  introduce: introduce,
  assetList: ['btc', 'eth'],
  catalogText: '持币余额 > 0.01 的地址数量',
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
