import { FaUsers } from 'react-icons/fa';
import React from 'react';
import * as D from '../def';
import { longBehavior } from './long_behavior';
import { reserveRisk } from './reserve_risk';
import { longSell } from './long_sell';
import { realizedAge } from './realized_age';
import { hodlAge } from './hodl_age';
import { rhodl } from './rhodl';
import { sthSupply } from './sth_supply';
import { sthChange } from './sth_change';
import { lthSupply } from './lth_supply';
import { lthChange } from './lth_change';
import { liveliness } from './liveliness';

export const investorBehavior:D.MenuItem = {
  name: '投资者行为',
  icon: <FaUsers />,
  key: 'sub8',
  visible: true,
  assetList: ['btc', 'eth'],
  subMenus: [
    liveliness,
    rhodl,
    reserveRisk,
    lthSupply,
    lthChange,
    // longBehavior,
    // longSell,
    sthSupply,
    // sthChange,
    // realizedAge,
    // hodlAge,
  ],
};
