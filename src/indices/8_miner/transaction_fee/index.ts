import { introduce } from './introduce';
import { chart } from './chart';
export const transactionFee = {
  name: '矿工交易费用收入占比',
  key: '矿工交易费用收入占比',
  loginRequired: true, // 付费指标
  vipRequired: true,
  visible: true,
  args: {
    index: 'miner/transaction_fee',
  },
  assetList: ['btc'],
  catalogText: '矿工从交易费用获取的收入所占百分比',
  toolbox: {
    annotation: {
      enabled: false, // 无标注
    },
    sma: {
      enabled: true,
    },
  },
  introduce: introduce,
  chart: { btc: chart, eth: chart },
};
