import * as D from '../../def';
import { introduce } from './introduce';
import { chart as chartDefault } from './chart';

export const transVolume:D.SubMenuItem = {
  name: '链上交易量',
  key: '链上交易量',
  loginRequired: true, // 付费指标
  vipRequired: true,
  visible: true,
  isNew: false,
  args: {
    index: 'market/transfers_volume',
  },
  introduce: introduce,
  assetList: ['usdt', 'busd', 'usdc', 'okb', 'ftt', 'sushi', 'uni', 'mana', 'matic', 'cro'],
  catalogText: '链上交易量统计',
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
  },
};