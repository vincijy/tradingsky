import * as D from '../../def';
import { introduce } from './introduce';

import { chart as chartDefault } from './chart_default';

export const smartContractPct:D.SubMenuItem = {
  name: '智能合约供应量占比',
  key: '智能合约供应量占比',
  loginRequired: true,
  vipRequired: true,
  visible: true,
  args: {
    index: 'address/smartcontract_percent',
  },
  introduce: introduce,
  assetList: ['usdt', 'busd', 'usdc', 'okb', 'ftt', 'sushi', 'uni', 'mana'],
  catalogText: '智能合约中token所占的百分比',
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
