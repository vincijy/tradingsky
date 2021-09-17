import * as D from '../../def';
import { introduce } from './introduce';
import { chart } from './chart';

export const balancePercent:D.SubMenuItem = {
  name: '交易所余额占比',
  key: '交易所余额占比',
  loginRequired: true,
  vipRequired: false,
  visible: true,
  args: {
    index: 'exchange/balance_percent',
  },
  introduce: introduce,
  assetList: ['btc', 'eth'],
  catalogText: '交易所余额的供应量占比',
  toolbox: {
    annotation: {
      enabled: false, // 无标注
    },
    sma: {
      enabled: true,
    },
  },
  chart: chart,
};
