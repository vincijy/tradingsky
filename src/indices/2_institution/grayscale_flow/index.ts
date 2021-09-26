import * as D from '../../def';
import { introduce } from './introduce';
import { chart } from './chart_btc';
import { chartEth } from './chart_eth';

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
  chart: { btc: chart, eth: chartEth },
  xStart: {
    btc: {
      year: 2020,
      month: 12,
      day: 27,
    },
    eth: {
      year: 2020,
      month: 12,
      day: 27,
    },
  },
};
