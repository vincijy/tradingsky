import * as D from '../../def';
import { introduce } from './introduce';
import { chart as chartBtc } from './chart';
import { chart as chartEth } from './chart_eth';


export const unLoss:D.SubMenuItem = {
  name: '未实现损失',
  key: '未实现损失',
  loginRequired: true, // 付费指标
  vipRequired: true,
  visible: true,
  isNew: true,
  args: {
    index: 'market/unrealized_loss',
  },
  introduce: introduce,
  assetList: ['btc', 'eth'],
  catalogText: '相对为实现损失',
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