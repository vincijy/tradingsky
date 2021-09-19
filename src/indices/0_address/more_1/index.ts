import * as D from '../../def';
import { introduce } from './introduce';
import { chart } from './chart_btc';
import { chartEth } from './chart_eth';

export const addressMore1:D.SubMenuItem = {
  name: '余额 > 1地址量',
  key: '余额 > 1地址量',
  loginRequired: true,
  vipRequired: false,
  visible: true,
  args: {
    index: 'address/balance_more1',
  },
  introduce: introduce,
  assetList: ['btc', 'eth'],
  catalogText: '持币余额 > 1 的地址数量',
  toolbox: {
    annotation: {
      enabled: false, // 无标注
    },
    sma: {
      enabled: true,
    },
  },
  chart: { btc: chart, eth: chartEth },
};
