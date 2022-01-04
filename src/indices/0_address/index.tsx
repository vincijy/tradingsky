import { FaFingerprint } from 'react-icons/fa';
import React from 'react';
import * as D from '../def';
import { active } from './active';
import { newAddress } from './new';
import { addressMore001 } from './more_001';
import { addressMore1 } from './more_1';
import { addressMore100 } from './more_100';
import { moreOneyear } from './more_1y';
import { addressMore1k } from './more_1k';
import { activeSentiment } from './active_sentiment';
import { nonZero } from './non_zero';
import { smartContractPct } from './smartcontract_pct';
import { top1Pct } from './top1_pct';


export const address:D.MenuItem = {
  name: '地址',
  icon: <FaFingerprint />,
  key: 'sub1',
  visible: true,
  assetList: ['btc', 'eth', 'usdt', 'busd', 'usdc', 'okb', 'ftt', 'sushi', 'uni', 'mana', 'matic', 'cro', 'wbtc', 'link', 'dai'],
  subMenus: [
    active,
    newAddress,
    nonZero,
    addressMore001,
    addressMore1,
    addressMore100,
    moreOneyear,
    addressMore1k,
    activeSentiment,
    smartContractPct,
    top1Pct,
  ],
};
