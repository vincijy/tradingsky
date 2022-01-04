import * as D from '../../def';
import { introduce } from './introduce';

import { chart as chartDefault } from './chart_default';

export const top1Pct:D.SubMenuItem = {
  name: '前1%地址持有百分比',
  key: '前1%地址持有百分比',
  loginRequired: true,
  vipRequired: true,
  visible: true,
  args: {
    index: 'address/top1pct_address',
  },
  introduce: introduce,
  assetList: ['usdt', 'busd', 'usdc', 'okb', 'ftt', 'sushi', 'uni', 'mana', 'matic', 'cro', 'wbtc', 'link', 'dai'],
  catalogText: '前1%地址持有所占的百分比',
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
    matic: chartDefault,
    cro: chartDefault,
    wbtc: chartDefault,
    link: chartDefault,
    dai: chartDefault,
  },
};
