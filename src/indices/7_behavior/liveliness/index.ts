import * as D from '../../def';
import { introduce } from './introduce';
import { chart } from './chart_btc';
import { chartEth } from './chart_eth';

export const liveliness:D.SubMenuItem = {
  name: 'Liveliness活跃度指标',
  key: 'Liveliness活跃度指标',
  loginRequired: true,
  vipRequired: true,
  visible: true,
  isNew: true,

  args: {
    index: 'behavior/liveliness',
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
