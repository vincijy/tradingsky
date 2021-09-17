import * as D from '../../def';
import { introduce } from './introduce';
import { chart } from './chart';

export const newAddress:D.SubMenuItem = {
  name: '新增地址量',
  key: '新增地址量',
  loginRequired: true,
  vipRequired: false,
  visible: true,
  args: {
    index: 'address/new',
  },
  introduce: introduce,
  assetList: ['btc', 'eth'],
  catalogText: '每天区块链网络新增地址数量统计',
  toolbox: {
    annotation: {
      enabled: false, // 无标注
    },
    sma: {
      enabled: true,
    },
  },
  chart: chart,
};
