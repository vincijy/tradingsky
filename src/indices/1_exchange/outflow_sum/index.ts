import * as D from '../../def';
import { introduce } from './introduce';
import { chart as chartBtc } from './chart_btc';
import { chart as chartEth } from './chart_eth';


export const exchangeOutflow:D.SubMenuItem = {
  name: '交易所流出量',
  key: '交易所流出量',
  loginRequired: true,
  vipRequired: true,
  visible: true,
  args: {
    index: 'exchange/outflow_sum',
  },
  introduce: introduce,
  assetList: ['btc', 'eth'],
  catalogText: '交易所地址转出的总额',
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
  // xStart: {
  //   btc: {
  //     year: 2012,
  //     month: 8,
  //     day: 20,
  //   },
  //   eth: {
  //     year: 2015,
  //     month: 8,
  //     day: 22,
  //   },
  // },
};
