import * as D from '../../def';
import { introduce } from './introduce';
import { chart as chartDefault } from './chart_default';


export const balanceExchange:D.SubMenuItem = {
  name: '交易所余额',
  key: '交易所余额',
  loginRequired: true,
  vipRequired: false,
  visible: true,
  args: {
    index: 'exchange/balance_exchanges',
  },
  introduce: introduce,
  assetList: ['usdt', 'busd', 'usdc', 'okb', 'ftt', 'sushi', 'uni', 'mana'],
  catalogText: '交易所地址上的token余额',
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
