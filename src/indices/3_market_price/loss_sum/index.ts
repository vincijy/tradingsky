import * as D from '../../def';
import { introduce } from './introduce';
import { chart as chartBtc } from './chart';
import { chart as chartEth } from './chart_eth';


export const lossSupply:D.SubMenuItem = {
  name: '亏损供应量',
  key: '亏损供应量',
  loginRequired: true, // 付费指标
  vipRequired: true,
  visible: true,
  isNew: true,
  args: {
    index: 'market/loss_sum',
  },
  introduce: introduce,
  assetList: ['btc', 'eth'],
  catalogText: '处于亏损状态的代币数量',
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