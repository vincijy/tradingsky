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

export const address:D.MenuItem = {
  name: '地址',
  icon: <FaFingerprint />,
  key: 'sub1',
  visible: true,
  assetList: ['btc', 'eth'],
  subMenus: [
    active,
    newAddress,
    addressMore001,
    addressMore1,
    addressMore100,
    moreOneyear,
    addressMore1k,
    activeSentiment,
  ],
};
