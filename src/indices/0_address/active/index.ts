import * as D from '../../def';
import { annotation } from './annotation';
import { introduce } from './introduce';
import { chart as chartBtc } from './chart_btc';
import { chart as chartDefault } from './chart_default';
import { chartEth } from './chart_eth';


export const active:D.SubMenuItem = {
  name: '活跃地址量',
  key: '活跃地址量',
  loginRequired: true, // 所有人都能看的指标
  vipRequired: false,
  visible: true,
  args: {
    index: 'address/active',
  },
  introduce: introduce,
  assetList: ['btc', 'eth', 'usdt', 'busd'],
  catalogText: '每天发生交易的地址数量统计',
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
    usdt: chartDefault,
    busd: chartDefault,
  },
  annotation: {
    btc: annotation,
    eth: annotation,
  },
};
