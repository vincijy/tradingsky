import * as D from '../../def';
import { introduce } from './introduce';
import { chart } from './chart';

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
  chart: chart,
};
