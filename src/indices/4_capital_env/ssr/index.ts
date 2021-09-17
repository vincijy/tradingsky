import * as D from '../../def';
import { annotation } from './annotation';
import { introduce } from './introduce';
import { chart } from './chart';

export const ssr:D.SubMenuItem = {
  name: '稳定币供应比率',
  key: '稳定币供应比率',
  loginRequired: true, // 付费指标
  vipRequired: true,
  visible: true,
  args: {
    index: 'capital/ssr',
  },
  introduce: introduce,
  assetList: ['btc'],
  catalogText: '稳定币与比特币之间的供给关系',
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
