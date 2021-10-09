import * as D from '../../def';
import { introduce } from './introduce';
import { chart } from './chart';

export const twoyearMultiplier:D.SubMenuItem = {
  name: '2年MA乘数',
  key: '2年MA乘数',
  loginRequired: true,
  vipRequired: false,
  visible: true,
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
