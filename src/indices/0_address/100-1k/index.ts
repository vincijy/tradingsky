import * as D from '../../def';
import { introduce } from './introduce';
import { chart } from './chart_btc';
import { chartEth } from './chart_eth';

export const addresshundredtoThousand:D.SubMenuItem = {
  name: '余额 100-1k 地址量',
  key: '余额 100-1k 地址量',
  loginRequired: true,
  vipRequired: true,
  visible: false,
  isNew: true,
  args: {
    index: 'address/100_1k',
  },
  introduce: introduce,
  assetList: ['btc', 'eth'],
  catalogText: '持币余额在100-1k之间的地址数量',
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
