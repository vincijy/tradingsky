import { annotation } from './annotation';
import { introduce } from './introduce';
import { chart } from './chart';

export const difficultyRibbon = {
  name: '难度彩虹带 (Difficulty Ribbon)',
  key: '难度彩虹带',
  loginRequired: true,
  vipRequired: false,
  visible: true,
  args: {
    index: 'miner/difficulty_ribbon',
  },
  assetList: ['btc'],
  catalogText: '基于7种不同的挖矿难度平均线量化比特币底部的指标',
  toolbox: {
    annotation: {
      enabled: true, // 有标注
    },
    sma: {
      enabled: false,
    },
  },
  annotation: { btc: annotation, eth: annotation },
  introduce: introduce,
  chart: { btc: chart, eth: chart },
  xStart: {
    btc: {
      year: 2011,
      month: 8,
      day: 22,
    },
    eth: {
      year: 2011,
      month: 8,
      day: 22,
    },
  },
};
