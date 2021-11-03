import * as D from '../../def';
import { introduce } from './introduce';
import { chart } from './chart_btc';
import { chartEth } from './chart_eth';

export const sthSupply:D.SubMenuItem = {
  name: '短期持有者持币数量',
  key: '短期持有者持币数量',
  loginRequired: true,
  vipRequired: true,
  visible: true,
  isNew: true,

  args: {
    index: 'behavior/sth_supply',
  },
  introduce: introduce,
  assetList: ['btc', 'eth'],
  catalogText: '短期持有者持有Coin数量',
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
      year: 2015,
      month: 9,
      day: 30,
    },
  },
};
