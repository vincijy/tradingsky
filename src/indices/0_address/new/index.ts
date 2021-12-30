import * as D from '../../def';
import { introduce } from './introduce';
import { chart } from './chart_btc';
import { chartEth } from './chart_eth';
import { chart as chartDefault } from './chart_default';

export const newAddress:D.SubMenuItem = {
  name: '新增地址量',
  key: '新增地址量',
  loginRequired: true,
  vipRequired: false,
  visible: true,
  args: {
    index: 'address/new',
  },
  introduce: introduce,
  assetList: ['btc', 'eth', 'usdt', 'busd', 'usdc', 'okb', 'ftt', 'sushi', 'uni', 'mana', 'matic', 'cro'],
  catalogText: '每天区块链网络新增地址数量统计',
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

  },
};
