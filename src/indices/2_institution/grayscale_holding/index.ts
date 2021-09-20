import * as D from '../../def';
import { introduce } from './introduce';
import { chart } from './chart_btc';
import { chartEth } from './chart_eth';

export const grayscaleHolding:D.SubMenuItem = {
  name: '灰度基金持仓量',
  key: '灰度基金持仓量',
  loginRequired: true,
  vipRequired: false,
  visible: true,
  args: {
    index: 'institution/grayscale_holding',
  },
  introduce: introduce,
  assetList: ['btc', 'eth'],
  catalogText: '灰度信托基金持有的BTC数量',
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
      day: 21,
    },
    eth: {
      year: 2020,
      month: 12,
      day: 21,
    },
  },
};
