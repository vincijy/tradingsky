import * as D from '../../def';
import { introduce } from './introduce';
import { chart } from './chart';

export const stockFlow:D.SubMenuItem = {
  name: 'Stock-to-Flow 模型',
  key: 'Stock-to-Flow 模型',
  loginRequired: true, // 免费指标
  vipRequired: false,
  visible: true,
  args: {
    index: 'value/stock_flow',
  },
  introduce: introduce,
  assetList: ['btc'],
  catalogText: '从稀缺性角度预测比特币未来估值的模型',
  toolbox: {
    annotation: {
      enabled: false, // 无标注
    },
    sma: {
      enabled: false,
    },
  },
  chart: { btc: chart, eth: chart },
};
