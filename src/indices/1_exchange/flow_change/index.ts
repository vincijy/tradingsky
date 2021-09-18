import * as D from '../../def';
import { introduce } from './introduce';
import { chart } from './chart';

export const flowChange:D.SubMenuItem = {
  name: '交易所净流量变化',
  key: '交易所净流量变化',
  loginRequired: true,
  vipRequired: true,
  visible: true,
  args: {
    index: 'exchange/flow_change',
  },
  introduce: introduce,
  assetList: ['btc', 'eth'],
  catalogText: '交易所净流量变化',
  toolbox: {
    annotation: {
      enabled: false, // 无标注
    },
    sma: {
      enabled: true,
    },
  },
  chart: { btc: chart, eth: chart },
};
