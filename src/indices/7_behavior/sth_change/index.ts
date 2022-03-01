import * as D from '../../def';
import { introduce } from './introduce';
import { chart } from './chart_btc';
import { chartEth } from './chart_eth';

export const sthChange:D.SubMenuItem = {
  name: '短期持有者持仓变化',
  key: '短期持有者持仓变化',
  loginRequired: true,
  vipRequired: true,
  visible: true,

  args: {
    index: 'behavior/sth_change',
  },
  introduce: introduce,
  assetList: ['btc', 'eth'],
  catalogText: '短期持有者持仓变化（买入/卖出）',
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
      month: 8,
      day: 1,
    },
    eth: {
      year: 2016,
      month: 3,
      day: 2,
    },
  },
};
