import * as D from '../../def';
import { introduce } from './introduce';
import { chart as chartBtc } from './chart';
import { chart as chartEth } from './chart_eth';


export const rePrice:D.SubMenuItem = {
  name: '已实现价格',
  key: '已实现价格',
  loginRequired: true, // 付费指标
  vipRequired: true,
  visible: true,
  isNew: true,
  args: {
    index: 'market/realized_price',
  },
  introduce: introduce,
  assetList: ['btc', 'eth'],
  catalogText: '已实现市值/当前供应量',
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