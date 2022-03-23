import * as D from '../../def';
import { introduce } from './introduce';
import { chart } from './chart_btc';
import { chartEth } from './chart_eth';

export const addressLess1:D.SubMenuItem = {
  name: '余额 < 1地址量',
  key: '余额 < 1地址量',
  loginRequired: true,
  vipRequired: true,
  visible: true,
  isNew: true,
  args: {
    index: 'address/less_1',
  },
  introduce: introduce,
  assetList: ['btc', 'eth'],
  catalogText: '持币余额 < 1 的地址数量',
  toolbox: {
    annotation: {
      enabled: false, // 无标注
    },
    sma: {
      enabled: true,
    },
  },
  chart: {
    btc: chart,
    eth: chartEth,
  },
};
