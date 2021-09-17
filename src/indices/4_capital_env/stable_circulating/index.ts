import * as D from '../../def';
import { introduce } from './introduce';
import { chart } from './chart';

export const circulating:D.SubMenuItem = {
  name: '稳定币累计流通量',
  key: '稳定币累计流通量',
  loginRequired: true, // 免费指标
  vipRequired: false,
  visible: true,
  args: {
    index: 'capital/stable_circulating',
  },
  introduce: introduce,
  assetList: ['btc'],
  catalogText: '所有稳定币发行供应量统计',
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