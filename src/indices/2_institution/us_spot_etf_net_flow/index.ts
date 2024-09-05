import * as D from '../../def';
import { introduce } from './introduce';
import { chart } from './chart_btc';
import { annotation } from './annotation';

export const usEtfNetFlow:D.SubMenuItem = {
  name: '美国现货ETF净流入量',
  key: '美国现货ETF净流入量',
  loginRequired: true,
  vipRequired: true,
  visible: true,
  args: {
    index: 'institution/us_spot_etf_net_flow',
  },
  introduce: introduce,
  assetList: ['btc'],
  catalogText: '美国现货ETF净流入量',
  toolbox: {
    annotation: {
      enabled: true, // 无标注
    },
    sma: {
      enabled: true,
    },
  },
  chart: { btc: chart },
  xStart: {
    btc: {
      year: 2024,
      month: 1,
      day: 20,
    },
    eth: {
      year: 2024,
      month: 1,
      day: 20,
    },
  },
};
