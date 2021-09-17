import * as D from '../../def';
import { introduce } from './introduce';
import { chart } from './chart';

export const purposeFlow:D.SubMenuItem = {
  name: 'Purpose Bitcoin ETF净流量',
  key: 'Purpose Bitcoin ETF净流量',
  loginRequired: true,
  vipRequired: false,
  visible: true,
  args: {
    index: 'institution/purpose_flow',
  },
  introduce: introduce,
  assetList: ['btc'],
  catalogText: 'Purpose Bitcoin ETF 持有比特币的流入/流出数量',
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
