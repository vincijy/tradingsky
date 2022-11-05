import * as D from '../../def';
import { introduce } from './introduce';
import { chart } from './chart_btc';
import { chartEth } from './chart_eth';

export const addressOnetoten:D.SubMenuItem = {
  name: '余额 1-10 地址量',
  key: '余额 1-10 地址量',
  loginRequired: true,
  vipRequired: true,
  visible: false,
  isNew: true,
  args: {
    index: 'address/1_10',
  },
  introduce: introduce,
  assetList: ['btc', 'eth'],
  catalogText: '持币余额在1-10之间的地址数量',
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
