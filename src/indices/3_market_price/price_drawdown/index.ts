import * as D from '../../def';
import { introduce } from './introduce';
import { chart } from './chart';

export const priceDrawdown:D.SubMenuItem = {
  name: '距最高点的回撤幅度 (Price Drawdown from ATH)',
  key: '距最高点的回撤幅度',
  loginRequired: true, // 免费指标
  vipRequired: false,
  visible: true,
  args: {
    index: 'market/price_drawdown',
  },
  introduce: introduce,
  assetList: ['btc', 'eth'],
  catalogText: '资产价格距历史最高点的下跌幅度（单位：%）',
  toolbox: {
    annotation: {
      enabled: false, // 无标注
    },
    sma: {
      enabled: true,
    },
  },
  chart: { btc: chart, eth: chart },
};
