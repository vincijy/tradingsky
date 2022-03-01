import * as D from '../../def';
import { introduce } from './introduce';
import { chart as chartBtc } from './chart_btc';
import { chart as chartEth } from './chart_eth';

export const balanceEx:D.SubMenuItem = {
  name: '交易所余额',
  key: '交易所余额',
  loginRequired: true,
  vipRequired: true,
  visible: true,
  isNew: true,
  args: {
    index: 'exchange/balance_exchange',
  },
  introduce: introduce,
  assetList: ['btc', 'eth'],
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
    btc: chartBtc,
    eth: chartEth,
  },
};
