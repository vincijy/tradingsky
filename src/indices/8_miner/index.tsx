
import { GiMiner } from 'react-icons/gi';
import React from 'react';
import * as D from '../def';
import { hashRibbon } from './hash_ribbon';
import { difficultyRibbon } from './difficulty_ribbon';
import { puell } from './puell';
import { transactionFee } from './transaction_fee';
export const miner:D.MenuItem = {
  name: '矿工',
  icon: <GiMiner />,
  key: 'sub9',
  visible: true,
  assetList: ['btc'],
  subMenus: [
    hashRibbon,
    difficultyRibbon,
    puell,
    transactionFee,
  ],
};
