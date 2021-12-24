import * as D from '../../def';
import { introduce } from './introduce';

import { chart as chartDefault } from './chart_default';

export const nonZero:D.SubMenuItem = {
  name: '非零地址量',
  key: '非零地址量',
  loginRequired: true,
  vipRequired: false,
  visible: true,
  args: {
    index: 'address/non_zero_count',
  },
  introduce: introduce,
  assetList: ['usdt', 'busd', 'usdc', 'okb', 'ftt', 'sushi', 'uni', 'mana'],
  catalogText: '每天区块链网络非零地址数量统计',
  toolbox: {
    annotation: {
      enabled: false, // 无标注
    },
    sma: {
      enabled: true,
    },
  },
  chart: {
    usdt: chartDefault,
    busd: chartDefault,
    usdc: chartDefault,
    okb: chartDefault,
    ftt: chartDefault,
    sushi: chartDefault,
    uni: chartDefault,
    mana: chartDefault,
  },
};
