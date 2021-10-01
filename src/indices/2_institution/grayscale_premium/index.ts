import * as D from '../../def';
import { introduce } from './introduce';
import { chart } from './chart_btc';
import { chartEth } from './chart_eth';

export const grayscalePremium:D.SubMenuItem = {
  name: '灰度基金溢价',
  key: '灰度基金溢价',
  loginRequired: true,
  vipRequired: false,
  visible: true,
  args: {
    index: 'institution/grayscale_premium',
  },
  introduce: introduce,
  assetList: ['btc', 'eth'],
  catalogText: '灰度信托基金的总价值相对于信托持有的资产净值的溢价',
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
      year: 2021,
      month: 1,
      day: 5,
    },
    eth: {
      year: 2021,
      month: 1,
      day: 5,
    },
  },
};
