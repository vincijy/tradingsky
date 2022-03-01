import * as D from '../../def';
import { introduce } from './introduce';
import { chart } from './chart_btc';
import { chartEth } from './chart_eth';

export const lthChange:D.SubMenuItem = {
  name: '长期持有者持仓变化',
  key: '长期持有者持仓变化',
  loginRequired: true,
  vipRequired: true,
  visible: true,

  args: {
    index: 'behavior/lth_change',
  },
  introduce: introduce,
  assetList: ['btc', 'eth'],
  catalogText: '长期持有者持仓变化（买入/卖出）',
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
      month: 3,
      day: 2,
    },
  },
};
