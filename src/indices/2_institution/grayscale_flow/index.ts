import * as D from '../../def';
import { introduce } from './introduce';
import { chart } from './chart';

export const grayscaleFlow:D.SubMenuItem = {
  name: '灰度基金净流量',
  key: '灰度基金净流量',
  loginRequired: true,
  vipRequired: false,
  visible: true,
  args: {
    index: 'institution/grayscale_flow',
  },
  introduce: introduce,
  assetList: ['btc', 'eth'],
  catalogText: '灰度信托基金持有比特币的流入/流出数量',
  toolbox: {
    annotation: {
      enabled: false, // 无标注
    },
    sma: {
      enabled: false,
    },
  },
  chart: chart,
};
