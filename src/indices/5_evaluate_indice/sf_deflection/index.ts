import * as D from '../../def';
import { introduce } from './introduce';
import { chart } from './chart';

export const sfDeflection:D.SubMenuItem = {
  name: 'Stock-to-Flow 模型偏差量',
  key: 'Stock-to-Flow 模型偏差量',
  loginRequired: true, // 付费指标
  vipRequired: true,
  visible: true,
  args: {
    index: 'value/stockflow_deflection',
  },
  introduce: introduce,
  assetList: ['btc'],
  catalogText: '比特币价格相对于S/F模型的偏差量',
  toolbox: {
    annotation: {
      enabled: false, // 无标注
    },
    sma: {
      enabled: true,
    },
  },
  chart: chart,
};
