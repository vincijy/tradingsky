import * as D from '../../def';
import { introduce } from './introduce';
import { chart } from './chart';

export const twoyearMultiplier:D.SubMenuItem = {
  name: '2-Year乘数通道 (2-Year MA Multiplier)',
  key: '2-Year乘数通道',
  loginRequired: true,
  vipRequired: false,
  visible: true,
  isNew: false,

  args: {
    index: 'value/two_years_multiplier',
  },
  introduce: introduce,
  assetList: ['btc'],
  catalogText: '指示了买卖比特币的最佳区间',
  toolbox: {
    annotation: {
      enabled: true, // 无标注
    },
    sma: {
      enabled: false,
    },
  },
  chart: { btc: chart, eth: chart },
};
