import * as D from '../../def';
import { introduce } from './introduce';
import { chart } from './chart';

export const positionChange:D.SubMenuItem = {
  name: '交易所净头寸变化',
  key: '交易所净头寸变化',
  loginRequired: true,
  vipRequired: true,
  visible: true,
  args: {
    index: 'exchange/position_change',
  },
  introduce: introduce,
  assetList: ['btc', 'eth'],
  catalogText: '交易所钱包净持仓变化（流入/流出）',
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
