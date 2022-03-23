import * as D from '../../def';
import { introduce } from './introduce';
import { chart } from './chart_btc';
import { chartEth } from './chart_eth';

export const addressMore10k:D.SubMenuItem = {
  name: '余额 > 10k地址量',
  key: '余额 > 10k地址量',
  loginRequired: true,
  vipRequired: true,
  visible: true,
  isNew: true,
  args: {
    index: 'address/more_10k',
  },
  introduce: introduce,
  assetList: ['btc', 'eth'],
  catalogText: '持币余额 >10k 的地址数量',
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
