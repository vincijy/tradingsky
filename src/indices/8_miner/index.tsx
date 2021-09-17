
import { MergeCellsOutlined, PullRequestOutlined, PayCircleOutlined, FlagOutlined, ProjectOutlined, LineChartOutlined, AlertOutlined, ThunderboltOutlined, PieChartOutlined } from '@ant-design/icons';
import React from 'react';
import * as D from '../def';
import { hashRibbon } from './hash_ribbon';
import { difficultyRibbon } from './difficulty_ribbon';
import { puell } from './puell';
import { transactionFee } from './transaction_fee';
export const miner:D.MenuItem = {
  name: '矿工',
  icon: <PieChartOutlined />,
  key: 'sub9',
  visible: true,
  assetList: ['btc', 'eth'],
  subMenus: [
    hashRibbon,
    difficultyRibbon,
    puell,
    transactionFee,
  ],
};
