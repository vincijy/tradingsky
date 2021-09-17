import * as D from '../../def';
import { annotation } from './annotation';
import { introduce } from './introduce';
import { chart } from './chart';

export const fairDeflection:D.SubMenuItem = {
  name: '公允价值偏差量',
  key: '公允价值偏差量',
  loginRequired: true,
  vipRequired: true,
  visible: true,
  args: {
    index: 'value/fairvalue_deflection',
  },
  introduce: introduce,
  assetList: ['btc'],
  catalogText: '相对于已实现市值评估市值是否被高估/低估',
  toolbox: {
    annotation: {
      enabled: true, // 有标注
    },
    sma: {
      enabled: true,
    },
  },
  chart: chart,
  annotation: annotation,
};

