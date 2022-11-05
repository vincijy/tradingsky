import * as D from '../../def';
import { annotation } from './annotation';
import { introduce } from './introduce';
import { chart } from './chart';

export const moreOneyear:D.SubMenuItem = {
  name: '一年以上持有量占比',
  key: '一年以上持有量占比',
  loginRequired: true,
  vipRequired: true,
  visible: false,
  args: {
    index: 'address/more_1y',
  },
  introduce: introduce,
  assetList: ['btc'],
  catalogText: '持有一年以上没有移动的供应量占比',
  toolbox: {
    annotation: {
      enabled: true, // 有标注
    },
    sma: {
      enabled: true,
    },
  },
  chart: { btc: chart, eth: chart },
  annotation: { btc: annotation, eth: annotation },
};
