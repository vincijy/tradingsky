import * as D from '../../def';
import { introduce } from './introduce';
import { chart as chartDefault } from './chart';

export const uniVolume:D.SubMenuItem = {
  name: 'Uniswap交易量',
  key: 'Uniswap交易量',
  loginRequired: true, // 付费指标
  vipRequired: true,
  visible: true,
  isNew: false,
  args: {
    index: 'market/uniswap_volume',
  },
  introduce: introduce,
  assetList: ['usdt', 'busd', 'usdc', 'okb', 'ftt', 'sushi', 'uni', 'mana', 'matic', 'cro', 'wbtc', 'link', 'dai'],
  catalogText: 'Uniswap交易量统计',
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