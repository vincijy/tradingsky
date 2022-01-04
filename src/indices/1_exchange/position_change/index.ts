import * as D from '../../def';
import { introduce } from './introduce';
import { chart } from './chart_btc';
import { chartEth } from './chart_eth';
import { chart as chartDefault } from './chart_default';

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
  assetList: ['btc', 'eth', 'usdt', 'busd', 'usdc', 'okb', 'ftt', 'sushi', 'uni', 'mana', 'matic', 'cro', 'wbtc', 'link', 'dai'],
  catalogText: '交易所钱包净持仓变化（流入/流出）',
  toolbox: {
    annotation: {
      enabled: false, // 无标注
    },
    sma: {
      enabled: true,
    },
  },
  chart: {
    btc: chart,
    eth: chartEth,
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
