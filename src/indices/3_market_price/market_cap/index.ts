import * as D from '../../def';
import { introduce } from './introduce';
import { chart as chartDefault } from './chart';

export const marketCap:D.SubMenuItem = {
  name: '市值',
  key: '市值',
  loginRequired: true, // 付费指标
  vipRequired: false,
  visible: true,
  isNew: false,
  args: {
    index: 'market/marketcap_usd',
  },
  introduce: introduce,
  assetList: ['usdt', 'busd', 'usdc', 'okb', 'ftt', 'sushi', 'uni', 'mana'],
  catalogText: '美元计价的市场价值',
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