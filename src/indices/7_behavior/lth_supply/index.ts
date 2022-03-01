import * as D from '../../def';
import { introduce } from './introduce';
import { chart } from './chart_btc';
import { chartEth } from './chart_eth';

export const lthSupply:D.SubMenuItem = {
  name: '长期持有者持币数量',
  key: '长期持有者持币数量',
  loginRequired: true,
  vipRequired: true,
  visible: true,

  args: {
    index: 'behavior/lth_supply',
  },
  introduce: introduce,
  assetList: ['btc', 'eth'],
  catalogText: '长期持有者持有Coin数量',
  toolbox: {
    annotation: {
      enabled: false, // 无标注
    },
    sma: {
      enabled: true,
    },
  },
  chart: { btc: chart, eth: chartEth },
  xStart: {
    btc: {
      year: 2010,
      month: 7,
      day: 30,
    },
    eth: {
      year: 2016,
      month: 2,
      day: 1,
    },
  },
};
